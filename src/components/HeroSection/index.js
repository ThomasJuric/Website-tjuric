import React from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroStyles';
const HeroSection = () => {
    return (
        <HeroContainer id = "home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Thomas Juric</HeroH1>
                <HeroP>
                    Computer Science Student
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
