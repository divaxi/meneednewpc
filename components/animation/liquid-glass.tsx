"use client";

import { Curtains, Plane, PlaneParams } from "curtainsjs";
import { useEffect } from "react";
import vertexShader from "./shader/vertex-shader";
import fragmentShader from "./shader/fragment-shader";

export default function LiquidGlass({ children }: { children: React.ReactNode }) {

    useEffect(() => {

        const state = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            gr: 100,
            thick: 50,
            bezel: 60,
            ior: 3.0,
            blur: 1.5,
            spec: 0.55,
            tint: 0.08,
            shadow: 0.5,
        };

        const curtains = new Curtains({
            container: "canvas",
            alpha: true, // allow transparency of our texture
            premultipliedAlpha: true, // this is important to get the right colors with transparent textures
        });
        // get our plane element
        const planeElement = document.getElementsByClassName("plane")[0];
        // set our initial parameters (basic uniforms)
        const params: PlaneParams = {
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: {
                // Gom các biến số thực (float) vào nhóm 'float'
                uRadius: {
                    name: "uRadius",
                    type: "1f", // '1f' tương ứng với float
                    value: state.gr,
                },
                uBezel: {
                    name: "uBezel",
                    type: "1f",
                    value: state.bezel,
                },
                uThickness: {
                    name: "uThickness",
                    type: "1f",
                    value: state.thick,
                },
                uIOR: {
                    name: "uIOR",
                    type: "1f",
                    value: state.ior,
                },
                uBlur: {
                    name: "uBlur",
                    type: "1f",
                    value: state.blur,
                },
                uSpecular: {
                    name: "uSpecular",
                    type: "1f",
                    value: state.spec,
                },
                uTint: {
                    name: "uTint",
                    type: "1f",
                    value: state.tint,
                },
                uShadow: {
                    name: "uShadow",
                    type: "1f",
                    value: state.shadow,
                },
                uBgAspect: {
                    name: "uBgAspect",
                    type: "1f",
                    value: 1.5,
                },

                // Gom các biến Vector2 vào nhóm '2f'
                uResolution: {
                    name: "uResolution",
                    type: "2f", // '2f' tương ứng với vec2
                    value: [window.innerWidth, window.innerHeight], // Dùng mảng [x, y] thay vì THREE.Vector2
                },
                uGlassCenter: {
                    name: "uGlassCenter",
                    type: "2f",
                    value: [state.x, state.y],
                },
            },
            transparent: true, // we need our texture to be transparent so that we can see the background
            depthTest: false
        };
        // create our plane using our curtains object, the HTML element and the parameters
        const plane = new Plane(curtains, planeElement, params);
        plane.onRender(() => {
            // use the onRender method of our plane fired at each requestAnimationFrame call
            (plane.uniforms.uRadius.value as number)++
        });

        return () => {
            curtains.dispose(); // don't forget to dispose of the curtains instance when the component unmounts 
        }

    }, [])
    return (
        <>
            <div id="canvas" className="absolute top-0 right-0 bottom-0 left-0" />
            <div className="plane">
                {children}
            </div>
        </>
    )
}