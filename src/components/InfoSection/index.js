

import React from 'react'
import {SiCodio, 
    SiVisualstudiocode, 
    SiPython, 
    SiJava,
    SiHtml5,
    SiCss3,
    SiStyledComponents,
    SiBootstrap,
    SiGit,
    SiReact,
    SiFigma,
    SiDrupal
    } from 'react-icons/si'
import {IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {HiOutlineCursorClick} from 'react-icons/hi'
import {FcLinux} from 'react-icons/fc'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    TheText,
} from './InfoElements'
const InfoSection = ({lightBg, id, lightText, headline, darkText, description1, description2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <Heading lightText = {lightText}>{headline}</Heading>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper darkText = {darkText}>
                            <Subtitle darkText = {darkText}>{description1}</Subtitle>
                                    <TheText>C Language | <SiCodio size={33}/></TheText>
                                    <TheText>Python | <SiPython size={33}/></TheText>
                                    <TheText>Java | <SiJava size={33}/></TheText>
                                    <TheText>Javascript | <IoLogoJavascript size={33}/></TheText>
                                    <TheText>HTML | <SiHtml5 size={33}/></TheText>
                                    <TheText>CSS | <SiCss3 size={33}/></TheText>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <TextWrapper darkText = {darkText}>
                        <Subtitle darkText = {darkText}>{description2}</Subtitle>
                                <TheText>React | <SiReact size={33}/></TheText>
                                <TheText>NodeJS | <IoLogoNodejs size={33}/></TheText>
                                <TheText>Selenium | <HiOutlineCursorClick size={33}/></TheText>
                                <TheText>Linux | <FcLinux size={33}/></TheText>
                                <TheText>Git | <SiGit size={33}/></TheText>
                                <TheText>Bootstrap | <SiBootstrap size={33}/></TheText>
                                <TheText>Visual Studio Code | <SiVisualstudiocode size={33}/></TheText>
                                <TheText>Styled Components | <SiStyledComponents size={33}/></TheText>
                                <TheText>Figma | <SiFigma size={33}/></TheText>
                                <TheText>Drupal | <SiDrupal size={33}/></TheText>
                        </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
