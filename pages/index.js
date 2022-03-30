import Head from 'next/head'
import Script from 'next/script'
import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useSpring, animated, config} from 'react-spring'
import Navigation from '../components/navigation.js'
import { ContentBox, Title, LongTitle, InfoBox, Image, LinkedImage, Description, LinkedText, SectionBox } from '../components/componentstyles.js'

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

      <Navigation animation={fadeInStyles} />

      <Parallax ref={parallax} pages={numPages}>
        {/*<Navigation numPages={numPages} animation={fadeInStyles}/>*/}

        <ParallaxLayer 
          offset={0} 
          speed={.25}
          onClick={() => parallax.current.scrollTo(1)}>
            <ContentBox>
              <animated.div className="text-3xl lg:text-5xl font-bold tracking-wide" style={instantFadeIn}>Evan Hemming</animated.div>
              <animated.div className="text-lg md:text-xl lg:text-3xl font-medium pt-1" style={titleFadeIn}>Full-Stack Web Developer</animated.div>
              <animated.div className="text-sm mt-10 lg:text-lg" style={fadeInStyles}>Tap or Scroll to Learn More</animated.div>
            </ContentBox>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1} 
          speed={.25}
          onClick={() => parallax.current.scrollTo(2)}>
          <ContentBox>
            <Title>About Me</Title>
            <InfoBox>
              <Image src="me.jpg" alt="Picture of me" />
              <Description>
                I&apos;m a Computer Science major at UNC Charlotte with a focus on Mobile and Web Applications.
                I&apos;m set to graduate after Summer 2022. 
                <br/><br/> 
                Hope you enjoy looking through my work! 
              </Description>
            </InfoBox>
          </ContentBox>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2} 
          speed={.25}
          onClick={() => parallax.current.scrollTo(3)}>
          <ContentBox>
            <LongTitle>Why EvansCoolPlace.com?</LongTitle>
            <InfoBox>
              <LinkedImage link="https://web.archive.org/web/20110201202849/http://evanscoolplace.com/" src="oldevanscoolplace.png" alt="Screenshot of my website from 2011"/>
              <Description>
                The domain name is an homage to a website I built in HTML when I was 9 years old. 
                This version of EvansCoolPlace is still available on   
                <LinkedText link="https://web.archive.org/web/20110201202849/http://evanscoolplace.com/" text=" Web Archive"/>
                !
                <br /><br /> 
                I like to think of EvansCoolPlace now as a showcase of my work sprung from that childhood passion.
              </Description>
            </InfoBox>
          </ContentBox>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={.25}
          onClick={() => parallax.current.scrollTo(0)}>
          <ContentBox>
            <Title>Portfolio Sections</Title>
            <div className="flex flex-col gap-8 xl:gap-12 lg:flex-row jusitfy-center px-10 pt-10 lg:px-0 lg:max-w-4xl xl:max-w-5xl">
              <SectionBox link="/major_projects" title="Major Projects" info="Long-term web development projects"/>
              <SectionBox link="/minor_projects" title="Minor Projects" info="Miscellaneous works over the years" />
              <SectionBox link="/minor_projects" title="Contact Info" info="Email, GitHub, LinkedIn, Twitter, etc." />
            </div>
          </ContentBox>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
