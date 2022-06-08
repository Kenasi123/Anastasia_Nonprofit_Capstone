import React, { useState } from 'react'

import Video from './video/newVid.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElement'
const HeroSection = () => { 
    const [hover, setHover] = useState(false) 
    const onHover = () => {
        setHover(!hover) 
    }
  return (
    <HeroContainer> 
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Culinary Education</HeroH1>
            <HeroP>
                Sign Up for a Class Today 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="http://localhost:3000/signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
