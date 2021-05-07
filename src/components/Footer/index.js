

import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {
    FooterContainer,
    FooterWrap,
    Socials,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialLink
} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <Socials>
                    <SocialMediaWrap>
                        <WebsiteRights>Thomas Juric © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                        <SocialLink href="https://www.linkedin.com/in/thomasjuric/" 
                            target = "__blank" aria-label = "Linkedin">
                                <FaLinkedin size = {33}/>
                            </SocialLink>
                            <SocialLink href="https://github.com/ThomasJuric" 
                            target = "__blank" aria-label = "Github">
                                <FaGithub size = {33}/>
                            </SocialLink>
                            <SocialLink href="mailto:tjuric@uoguelph.ca" 
                            target = "__blank" aria-label = "Email">
                                <FiMail size = {33}/>
                        </SocialLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </Socials>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
