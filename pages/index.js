import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useSpring, animated, config} from 'react-spring'
import profilePic from '../public/me.jpg'

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
  const numPages = 3;

  //fade-in animation
  const fadeInStyles = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    delay: 3000,
    config: config.molasses
  })

  const titleFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 1500,
    config: config.molasses
  })

  const instantFadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 500,
    config: config.molasses
  })

  return (
    <div ref={bgRef} className="h-screen w-screen">     
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy='beforeInteractive'></Script>

      <Parallax ref={parallax} pages={numPages}>
        <ParallaxLayer 
          offset={0} 
          speed={.25}
          onClick={() => parallax.current.scrollTo(1)}>
            <div className="flex flex-col h-screen w-screen justify-center items-center">
              <animated.div className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide" style={instantFadeIn}>Evan Hemming</animated.div>
              <animated.div className="text-lg md:text-xl lg:text-2xl font-medium pt-1" style={titleFadeIn}>Web and Software Developer</animated.div>
              <animated.div className="text-sm mt-10 lg:text-lg" style={fadeInStyles}>Tap or Scroll to See More</animated.div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={.25}>
          <div className="flex flex-col h-screen w-screen justify-center items-center">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide pb-5 lg:pb-10">About Me</span>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-center align-center px-10 lg:p-0 lg:items-start">
              <img className="max-h-80 max-w-80 rounded-lg px-4 lg:px-0" src="me.jpg" alt="Picture of me"/>
              <div className="text-sm md:text-lg lg:text-xl lg:max-w-md lg:text-left">I&apos;m a Computer Science major at UNC Charlotte with a focus on Mobile and Web Applications.
              I&apos;m set to graduate after Summer 2022. <br/><br/> Hope you enjoy looking through my work! </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={.25}>
          <p className='text-white'>TEST</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
