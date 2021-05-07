import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import Video from '../../videos/video.mp4'
import LinkedIn from '../../images/linkedin.png';
import Mail from '../../images/gmail.png';
import Github from '../../images/github.png';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    SocialIcons,
    SocialLink,
    Line
} from './HeroStyles';
import { FaBuromobelexperte } from 'react-icons/fa';
const HeroSection = () => {
    return (
        <HeroContainer id = "home">
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type = 'video/mp4'/> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Thomas Juric</HeroH1>
                <HeroP>
                    Computer Science Student
                </HeroP>
                <Line/>
                <SocialIcons>
                    <SocialLink href="https://www.linkedin.com/in/thomasjuric/" 
                    target = "__blank" aria-label = "Linkedin">
                        <FaLinkedin/>
                    </SocialLink>
                    <SocialLink href="https://github.com/ThomasJuric" 
                    target = "__blank" aria-label = "Github">
                        <FaGithub/>
                    </SocialLink>
                    <SocialLink href="mailto:tjuric@uoguelph.ca" 
                    target = "__blank" aria-label = "Email">
                        <FiMail/>
                    </SocialLink>
                </SocialIcons>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
