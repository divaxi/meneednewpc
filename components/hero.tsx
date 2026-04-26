"use client";
import html2canvas from 'html2canvas-pro';
import { useEffect, useRef, useState } from 'react';
import LiquidGlass from './animation/liquid-glass';
import Image from 'next/image';

function PPHero({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) {

    return (
        <div id="capture" ref={ref} className='relative'>
            <Image src="/images/hero-bg.webp" alt="hero background" fill className='object-cover' />
            <section className="h-screen w-full flex flex-col items-center justify-center ">
                <div className="w-full h-[25vh] flex items-center justify-center relative overflow-hidden  ">
                    <h1 className="text-5xl md:text-6xl lg:text-9xl font-trimposter font-bold tracking-tighter text-foreground" >
                        <span className="font-thin tracking-tight " >Me Need New </span>
                        <span >P</span>
                        <span >C</span>
                    </h1>
                </div>
            </section>
        </div>
    )
}

function LoadingHero() {
    return (
        <div className='relative w-screen h-screen items-center justify-center flex'>
            {/* <Image src="/images/hero-bg.webp" alt="hero background" fill className='object-cover' /> */}
            <span className="svg-spinners--bars-scale text-9xl"></span>
        </div>
    )
}

export default function Hero() {
    const captureRef = useRef<HTMLDivElement>(null);
    const [canvasImage, setCanvasImage] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (captureRef.current) {
                html2canvas(captureRef.current).then(canvas => {
                    setCanvasImage(canvas.toDataURL());
                });
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [])


    if (canvasImage) {
        return (
            <LiquidGlass>
                <Image
                    src={canvasImage}
                    loading='eager'
                    alt="hero"
                    crossOrigin="anonymous"
                    data-sampler="uBgTex"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    onContextMenu={(e) => e.preventDefault()}
                />
            </LiquidGlass>
        )
    }

    return (
        <>
            <LoadingHero />
            <div className='absolute inset-0 -z-1'>
                <PPHero ref={captureRef} />
            </div>
        </>
    );
}

