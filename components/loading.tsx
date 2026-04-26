
export default function Loading({ width = 24, height = 24 }: { width?: number, height?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
            <rect height="12" y="6" className="lkrd2u">
                <animate id="SVGLQdHQe4p" attributeName="y" begin="0;SVGg3vsIeGm.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6" />
                <animate attributeName="height" begin="0;SVGg3vsIeGm.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12" />
            </rect>
            <rect height="12" y="6" className="avt_wu">
                <animate attributeName="y" begin="SVGLQdHQe4p.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6" />
                <animate attributeName="height" begin="SVGLQdHQe4p.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12" />
            </rect>
            <rect height="12" y="6" className="i6d7mf">
                <animate attributeName="y" begin="SVGLQdHQe4p.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6" />
                <animate attributeName="height" begin="SVGLQdHQe4p.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12" />
            </rect>
            <rect height="12" y="6" className="hkr1jw">
                <animate attributeName="y" begin="SVGLQdHQe4p.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6" />
                <animate attributeName="height" begin="SVGLQdHQe4p.begin+0.3s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12" />
            </rect>
            <rect height="12" y="6" className="sjp56j">
                <animate id="SVGg3vsIeGm" attributeName="y" begin="SVGLQdHQe4p.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6" />
                <animate attributeName="height" begin="SVGLQdHQe4p.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12" />
            </rect>
        </svg>

    )
}