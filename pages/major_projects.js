import Head from 'next/head'
import Script from 'next/script'
import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navigation from '../components/navigation.js'
import { ContentBox, Title, LongTitle, InfoBox, Image, LinkedImage, Description, LinkedText } from '../components/componentstyles.js'

export default function MajorProjects() {
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
    const numPages = 6;

    return (
        <div ref={bgRef} className="h-screen w-screen">
            <Head>
                <title>Major Projects</title>
                <link rel="icon" href="/logo.png" />
            </Head>

            <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy='beforeInteractive'></Script>

            <Navigation animation = {{}} />

            <Parallax ref={parallax} pages={numPages}>

                <ParallaxLayer
                    offset={0}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(1)}>
                    <ContentBox>
                        <span className="text-4xl lg:text-5xl font-bold tracking-wide pb-5">Major Projects</span>
                        <span className="text-lg lg:text-xl">Tap or Scroll to Browse</span>
                    </ContentBox>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(2)}>
                    <ContentBox>
                        <Title>Cardle (2022)</Title>
                        <InfoBox>
                            <LinkedImage link="https://www.cardlegame.com/" src="cardle.png" alt="Linked screenshot of the Cardle web app"/>
                            <Description>
                                Wordle-like game with minions from the collectible card game Hearthstone. Played by tens of thousands of users!
                                <br /><br />
                                Featured on 
                                <LinkedText link="https://esports.gg/news/hearthstone/hearthstone-wordle/" text=" Esports.gg"/>
                                ,
                                <LinkedText link="https://outof.cards/hearthstone/4136-enjoy-wordle-try-out-a-hearthstone-version-where-you-guess-the-minion-cardle" text=" OutOfCards" />
                                ,
                                <LinkedText link="https://www.youtube.com/watch?v=KaG7--xwqxs" text=" Zeddy HS" />
                                . Reveal
                                <LinkedText link="https://twitter.com/boomemdee/status/1483197103144849416" text=" tweet "/>
                                reached 190k+ impressions.
                                <br /><br />
                                Technologies used: React, Tailwind CSS, Python
                            </Description>
                        </InfoBox>
                    </ContentBox>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(3)}>
                    <ContentBox>
                        <Title>FlickMeter (2021)</Title>
                        <InfoBox>
                            <LinkedImage link="https://fm.pldyn.net/movies" src="flickmeter.png" alt="Linked screenshot of the FlickMeter search page" />
                            <Description>
                                Movie database with audience scores aggregated from iMDB, Rotten Tomatoes, Metacritic, and more.
                                <br /><br />
                                Features advanced filters, movie search, and movie/actor pages with detailed information.
                                <br /><br />
                                Technologies used: EJS, Bootstrap, Express, MongoDB, Python
                            </Description>
                        </InfoBox>
                    </ContentBox>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(4)}>
                    <ContentBox>
                        <Title>HandsFree (2020)</Title>
                        <InfoBox>
                            <LinkedImage link="https://youtu.be/3uKIXJ4oQnA" src="handsfree.png" alt="Linked screenshot from the HandsFree web app" />
                            <Description>
                                Menu management web app built for small restaurants to create hands-free menus linked by QR codes.
                                <br /><br />
                                Features account authentication and subscription payment processing.
                                <br /><br />
                                Technologies used: NextJS, MongoDB, Tailwind CSS, Stripe, Auth0
                            </Description>
                        </InfoBox>
                    </ContentBox>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={4}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(5)}>
                    <ContentBox>
                        <LongTitle>Datavard Quick Analysis (2021)</LongTitle>
                        <InfoBox>
                            <Image src="datavard.png" alt="Screenshot from the Datavard Quick Analysis web app"/>
                            <Description>
                                Python-based web app that compiles business information from an SAP database into an interactive platform.
                                <br /><br />
                                Built for SAP partner company Datavard.
                                <br /><br />
                                Technologies used: Python, Dash, HTML/CSS, ABAP (SQL)
                            </Description>
                        </InfoBox>
                    </ContentBox>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={5}
                    speed={.25}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <ContentBox>
                        <Title>Evans Cool Place (2022)</Title>
                        <InfoBox>
                            <Image src="portfolio.png" alt="Screenshot from this Portfolio wesbite" />
                            <Description>
                                This portfolio website!
                                <br /><br />
                                Features modular designs for mobile accessibility, custom animations, and handcrafted UI components
                                <br /><br />
                                Technologies used: NextJS, Tailwind CSS, React-Spring
                            </Description>
                        </InfoBox>
                    </ContentBox>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
