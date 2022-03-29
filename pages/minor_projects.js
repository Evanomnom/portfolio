import Head from 'next/head'
import Script from 'next/script'
import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navigation from '../components/navigation.js'

export default function MinorProjects() {
    //animated background
    const [vantaEffect, setVantaEffect] = useState(0)
    const bgRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(DOTS({
                el: bgRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x12448c,
                color2: 0x0,
                backgroundColor: 0x0,
                size: 3.70,
                spacing: 51.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


    //parallax scrolling
    const parallax = useRef()

    //page variables
    const numPages = 4;

    return (
        <div ref={bgRef} className="h-screen w-screen">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy='beforeInteractive'></Script>

            <Navigation animation={{}} />

            <Parallax ref={parallax} pages={numPages}>

                <ParallaxLayer
                    offset={0}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(1)}>
                    <div className="flex flex-col h-screen w-screen justify-center items-center pb-10 md:pb-0">
                        <span className="text-3xl lg:text-4xl font-bold tracking-wide pb-5 lg:pb-10">Minor Projects</span>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(2)}>
                    <div className="flex flex-col h-screen w-screen justify-center items-center pb-10 md:pb-0">

                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <div className="flex flex-col h-screen w-screen justify-center items-center pb-10 md:pb-0">

                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
