const vertexShader = `
	attribute vec3 aVertexPosition;
	attribute vec2 aTextureCoord;
	uniform mat4 uPMatrix;
	uniform mat4 uMVMatrix;
	varying vec2 vUv; // Để nguyên tên này để Fragment Shader không phải sửa

	void main() {
		vUv = aTextureCoord;
		gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
	}
`

export default vertexShader