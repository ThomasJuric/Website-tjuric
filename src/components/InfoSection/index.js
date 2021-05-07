import React from 'react'
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
                                    <li>C Language</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>Javascript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                        </TextWrapper>

                        </Column1>
                        <Column2>
                        <TextWrapper darkText = {darkText}>
                        <Subtitle darkText = {darkText}>{description2}</Subtitle>
                            <ul>
                                <li>React</li>
                                <li>NodeJS</li>
                                <li>Selenium</li>
                                <li>Linux</li>
                                <li>Git</li>
                                <li>Bootstrap</li>
                                <li>Visual Studio Code</li>
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
