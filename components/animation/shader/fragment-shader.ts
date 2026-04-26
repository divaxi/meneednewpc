const fragmentShader = `
precision highp float;
varying vec2 vUv;

uniform vec2 uResolution;
uniform vec2 uGlassCenter;
// uGlassSize không còn cần thiết cho hình tròn, ta dùng uRadius
uniform float uRadius;
uniform float uBezel;
uniform float uThickness;
uniform float uIOR;
uniform float uBlur;
uniform float uSpecular;
uniform float uTint;
uniform float uShadow;
uniform sampler2D uBgTex;
uniform float uBgAspect;

// 1. Hàm SDF cho hình tròn: cực kỳ đơn giản và mượt mà
float sdCircle(vec2 p, float r) {
    return length(p) - r;
}

float surfaceHeight(float t) {
    float s = 1.0 - t;
    return pow(1.0 - s*s*s*s, 0.25);
}

vec3 sampleBg(vec2 screenUV) {
    float screenAspect = uResolution.x / uResolution.y;
    vec2 uv = screenUV;
    if (uBgAspect > screenAspect) {
        float s = screenAspect / uBgAspect;
        uv.x = uv.x * s + (1.0 - s) * 0.5;
    } else {
        float s = uBgAspect / screenAspect;
        uv.y = uv.y * s + (1.0 - s) * 0.5;
    }
    uv.y = 1.0 - uv.y;
    return texture2D(uBgTex, uv).rgb;
}

vec3 sampleBgBlurred(vec2 uv, float radius) {
    if (radius < 0.5) return sampleBg(uv);
    vec3 sum = vec3(0.0);
    vec2 px = 1.0 / uResolution;
    vec2 offsets[16];
    offsets[0]  = vec2(-0.94201, -0.39906);
    offsets[1]  = vec2( 0.94558, -0.76890);
    offsets[2]  = vec2(-0.09418, -0.92938);
    offsets[3]  = vec2( 0.34495,  0.29387);
    offsets[4]  = vec2(-0.91588, -0.45771);
    offsets[5]  = vec2(-0.81544,  0.48568);
    offsets[6]  = vec2(-0.38277, -0.56071);
    offsets[7]  = vec2(-0.12675,  0.84686);
    offsets[8]  = vec2( 0.89642,  0.41254);
    offsets[9]  = vec2( 0.18150, -0.30020);
    offsets[10] = vec2(-0.01445, -0.16001);
    offsets[11] = vec2( 0.59614,  0.71118);
    offsets[12] = vec2( 0.49742, -0.47280);
    offsets[13] = vec2( 0.80685,  0.04588);
    offsets[14] = vec2(-0.32490, -0.03965);
    offsets[15] = vec2(-0.60975,  0.06566);
    for (int i = 0; i < 16; i++) {
        sum += sampleBg(uv + offsets[i] * radius * px);
    }
    return sum / 16.0;
}

// Hàm tạo số ngẫu nhiên dựa trên tọa độ (giả lập Noise)
float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

// Hàm nhiễu 2D mượt mà (Value Noise)
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f); // Smoothstep interpolation
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Hàm SDF cho "vũng nước"
float sdPuddle(vec2 p, float r) {
    // 1. Tính góc của pixel hiện tại so với tâm (từ -PI đến PI)
    float angle = atan(p.y, p.x);
    
    // 2. Tạo biến dạng dựa trên góc và thời gian
    // Bạn có thể nhân thêm uTime vào để vũng nước "lay động"
    float deformation = noise(vec2(angle * 2.0, 0.0)) * 40.0; // 40.0 là độ lồi lõm
    float secondaryDeform = noise(vec2(angle * 5.0, 1.0)) * 15.0; // Thêm chi tiết nhỏ
    
    float targetR = r + deformation + secondaryDeform;
    
    return length(p) - targetR;
}

void main() {
    // Chuyển tọa độ vUv sang tọa độ Pixel trên màn hình
    vec2 screenPx = vec2(vUv.x, 1.0 - vUv.y) * uResolution;
    vec2 p = screenPx - uGlassCenter;

    // 2. Tính khoảng cách tới hình tròn
    float sd = sdPuddle(p, uRadius);

    // Xử lý bóng đổ bên ngoài hình tròn
    if (sd > 0.0) {
        float shadowFalloff = exp(-sd * sd / 800.0);
        float shadowAlpha = uShadow * shadowFalloff * 0.6;
        gl_FragColor = vec4(0.0, 0.0, 0.0, shadowAlpha);
        return;
    }

    // Xử lý bên trong hình tròn
    float distFromEdge = -sd;
    // Bezel không được vượt quá bán kính
    float bezel = min(uBezel, uRadius - 1.0);
    float t = clamp(distFromEdge / bezel, 0.0, 1.0);

    // Tính toán độ cao bề mặt để tạo hiệu ứng thấu kính
    float h = surfaceHeight(t);
    float dt = 0.001;
    float h2 = surfaceHeight(min(t + dt, 1.0));
    float dh = (h2 - h) / dt;

    // Tính toán góc khúc xạ (Snell's Law approximation)
    float slopeAngle = atan(dh * (uThickness / bezel));
    float sinR = sin(slopeAngle) / uIOR;
    sinR = clamp(sinR, -1.0, 1.0);
    float thetaR = asin(sinR);
    float displacement = h * uThickness * (tan(slopeAngle) - tan(thetaR));

    // 3. Tính Gradient cho hình tròn (hướng của bề mặt)
    vec2 grad;
    float eps = 0.5;
    grad.x = sdCircle(p + vec2(eps, 0.0), uRadius) - sd;
    grad.y = sdCircle(p + vec2(0.0, eps), uRadius) - sd;
    grad = normalize(grad);

    // Độ lệch của ảnh nền do khúc xạ
    vec2 offset = -grad * displacement / uResolution;
    vec2 screenUV = screenPx / uResolution;
    vec2 refractedUV = screenUV + offset;

    // Lấy màu nền đã được làm mờ và khúc xạ
    vec3 color = sampleBgBlurred(refractedUV, uBlur);

    // 4. Thêm hiệu ứng ánh sáng (Specular/Rim light)
    vec2 lightDir = normalize(vec2(0.5, -0.7));
    float rimDot = abs(dot(grad, lightDir));
    float rimFalloff = 1.0 - smoothstep(0.0, bezel * 0.4, distFromEdge);
    float specHighlight = pow(rimDot * rimFalloff, 1.5);
    color += vec3(specHighlight * uSpecular);

    // Bóng đổ nội phần và viền sáng
    float innerShadow = 1.0 - smoothstep(0.0, bezel * 0.6, distFromEdge);
    color *= mix(1.0, 0.7, innerShadow * 0.3);

    float innerRim = smoothstep(0.0, 2.0, distFromEdge) * (1.0 - smoothstep(2.0, 5.0, distFromEdge));
    color += vec3(innerRim * 0.15 * uSpecular);

    // Pha màu (Tint) cho kính
    color = mix(color, vec3(1.0), uTint);

    // Khử răng cưa cho mép hình tròn
    float alpha = smoothstep(0.0, 1.5, distFromEdge);
    gl_FragColor = vec4(color, alpha);
}
`
export default fragmentShader