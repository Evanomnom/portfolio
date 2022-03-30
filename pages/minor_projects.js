import Head from 'next/head'
import Script from 'next/script'
import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navigation from '../components/navigation.js'
import { ContentBox, Title, LongTitle, InfoBox, Image, LinkedImage, Description, LinkedText } from '../components/componentstyles.js'

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
                    <ContentBox>
                        <span className="text-3xl lg:text-5xl font-bold tracking-wide pb-5">Minor Projects</span>
                        <span className="text-md lg:text-xl">Tap or Scroll to Browse</span>
                    </ContentBox>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(2)}>
                    <ContentBox>
                        <Title>Blackjack Neural Net (2020)</Title>
                        <InfoBox>
                            <LinkedImage link="https://youtu.be/mQkCMU0UFL8" src="blackjack.jpg" alt="Linked screenshot of the Blackjack Neutral Net demo"/>
                            <Description>
                                Neural network trained in Blackjack using Unity ML-Agents that will beat the house over time.
                                <br/><br/>
                                Alongside front-facing game information, the model keeps track of a card counter variable to inform decisions.
                                <br/><br/>
                                Technologies used: Unity, ML-Agents, Tensorflow
                            </Description>
                        </InfoBox>
                    </ContentBox>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(3)}>
                    <ContentBox>
                        <Title>Infinity Dash (2017)</Title>
                        <InfoBox>
                            <LinkedImage link="https://youtu.be/5BryQQTVYcc" src="infinitydash.png" alt="Linked screenshot of the Blackjack Neutral Net demo" />
                            <Description>
                                Infinite runner mobile game for Android inspired by Geometry Dash.
                                <br /><br />
                                Features integration with Google Play leaderboards, in-app purchases, and banner/video ads.
                                <br /><br />
                                Technologies used: Unity, Google Play Console
                            </Description>
                        </InfoBox>
                    </ContentBox>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <ContentBox>
                        <Title>Bracket Simulator (2017)</Title>
                        <InfoBox>
                            <LinkedImage link="https://docs.google.com/spreadsheets/d/1ByAPDFrIc3hYC4EQLegpWGVtvWYnal3CES5Ryj6xuHA/edit?usp=sharing" src="bracketsim.png" alt="Linked screenshot of the Double Elimination Bracket Simulator" />
                            <Description>
                                Double elimination bracket simulator built entirely in Google Sheets.
                                <br /><br />
                                Features customizable player pool, viewable brackets, and results/stats from potentially thousands of runs.
                                <br /><br />
                                Technologies used: Apps Script (JavaScipt), Google Sheets
                            </Description>
                        </InfoBox>
                    </ContentBox>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
