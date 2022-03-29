import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useSpring, animated, config} from 'react-spring'
import Boop from '../components/boop.js'
import Navigation from '../components/navigation.js'

export default function Home() {
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

  //fade-in animation
  const fadeInStyles = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    delay: 3000,
    config: config.slow
  })

  const titleFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 1500,
    config: config.slow
  })

  const instantFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 500,
    config: config.slow
  })

  

  return (
    <div ref={bgRef} className="h-screen w-screen">     
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy='beforeInteractive'></Script>

      <Navigation animation={fadeInStyles} />

      <Parallax ref={parallax} pages={numPages}>
        {/*<Navigation numPages={numPages} animation={fadeInStyles}/>*/}

        <ParallaxLayer 
          offset={0} 
          speed={.25}
          onClick={() => parallax.current.scrollTo(1)}>
            <div className="flex flex-col h-screen w-screen justify-center items-center pb-10 md:pb-0">
              <animated.div className="text-3xl lg:text-4xl font-bold tracking-wide" style={instantFadeIn}>Evan Hemming</animated.div>
              <animated.div className="text-lg md:text-xl lg:text-2xl font-medium pt-1" style={titleFadeIn}>Web and Software Developer</animated.div>
              <animated.div className="text-sm mt-10 lg:text-lg" style={fadeInStyles}>Tap or Scroll to Learn More</animated.div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1} 
          speed={.25}
          onClick={() => parallax.current.scrollTo(2)}>
          <div className="flex flex-col h-screen w-screen justify-center items-center pb-10 md:pb-0">
            <span className="text-3xl lg:text-4xl font-bold tracking-wide pb-5 lg:pb-10">About Me</span>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-center align-center px-10 lg:p-0 lg:items-start">
              <img className="max-h-80 max-w-80 rounded-lg px-4 lg:px-0" src="me.jpg" alt="Picture of me" />
              <div className="text-sm md:text-lg lg:text-xl lg:max-w-md lg:text-left">I&apos;m a Computer Science major at UNC Charlotte with a focus on Mobile and Web Applications.
                I&apos;m set to graduate after Summer 2022. 
                <br/><br/> 
                Hope you enjoy looking through my work! 
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2} 
          speed={.25}
          onClick={() => parallax.current.scrollTo(0)}>
          <div className="flex flex-col h-screen w-screen justify-center items-center pb-10 md:pb-0">
            <span className="text-2xl lg:text-4xl font-bold tracking-wide pb-5 lg:pb-10">Why EvansCoolPlace.com?</span>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-center align-center px-10 lg:p-0 lg:items-start">
              <a href="https://web.archive.org/web/20110201202849/http://evanscoolplace.com/" target="_blank" rel="noreferrer">
                <Boop><img className="max-h-80 max-w-80 rounded-lg px-4 lg:px-0" src="oldevanscoolplace.png" alt="Picture of my website in 2011" /></Boop>
              </a>
              <div className="text-sm md:text-lg lg:text-xl lg:max-w-md lg:text-left">The domain name is an homage to a website I built in HTML when I was 9 years old. 
                This version of EvansCoolPlace is still available on   
                <a href="https://web.archive.org/web/20110201202849/http://evanscoolplace.com/" target="_blank" rel="noreferrer"><Boop><span className="font-semibold"> Web Archive</span></Boop></a>!
                <br /><br /> 
                I like to think of EvansCoolPlace now as a showcase of my work sprung from that childhood passion.
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
