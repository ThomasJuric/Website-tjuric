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
    SiReact
    } from 'react-icons/si'
import {GrSelect} from 'react-icons/gr'
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
    TopLine,
    Heading,
    Subtitle
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
                                <ul>
                                    <li>C Language | <SiCodio size={33}/></li>
                                    <li>Python | <SiPython size={33}/></li>
                                    <li>Java | <SiJava size={33}/></li>
                                    <li>Javascript | <IoLogoJavascript size={33}/></li>
                                    <li>HTML | <SiHtml5 size={33}/></li>
                                    <li>CSS | <SiCss3 size={33}/></li>
                                    <li>Styled Components | <SiStyledComponents size={33}/></li>
                                </ul>
                        </TextWrapper>

                        </Column1>
                        <Column2>
                        <TextWrapper darkText = {darkText}>
                        <Subtitle darkText = {darkText}>{description2}</Subtitle>
                            <ul>
                                <li>React | <SiReact size={33}/></li>
                                <li>NodeJS | <IoLogoNodejs size={33}/></li>
                                <li>Selenium | <HiOutlineCursorClick size={33}/></li>
                                <li>Linux | <FcLinux size={33}/></li>
                                <li>Git | <SiGit size={33}/></li>
                                <li>Bootstrap | <SiBootstrap size={33}/></li>
                                <li>Visual Studio Code | <SiVisualstudiocode size={33}/></li>
                            </ul>
                        </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
