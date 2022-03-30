import Head from 'next/head'
import Script from 'next/script'
import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import Navigation from '../components/navigation.js'
import { ContentBox, LinkedIcon } from '../components/componentstyles.js'

export default function Contact() {
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

    return (
        <div ref={bgRef} className="h-screen w-screen" style={{ maxHeight: "-webkit-fill-available" }}>
            <Head>
                <title>Contact Info</title>
                <link rel="icon" href="/logo.png" />
            </Head>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy='beforeInteractive'></Script>

            <Navigation animation={{}} />

            <ContentBox>
                <span className="text-4xl lg:text-6xl font-bold tracking-wide pb-10 lg:pb-12">Contact Me</span>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
                    <LinkedIcon link="https://github.com/Evanomnom" src="github.png" alt="Linked GitHub icon"/>
                    <LinkedIcon link="https://www.linkedin.com/in/evan-hemming/" src="linkedinwhite.png" alt="Linked LinkedIn icon" />
                    <LinkedIcon link="mailto:ehemming@gmail.com" src="email.png" alt="Linked Email icon" />
                    <LinkedIcon link="https://twitter.com/boomemdee" src="twitterwhite.png" alt="Linked Twitter icon" />
                </div>
                <span className="text-lg lg:text-xl pt-10">Email: ehemming99@gmail.com</span>
            </ContentBox>
        </div>
    )
}
