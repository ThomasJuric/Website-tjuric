import React from 'react'

import {FaGithub, FaGamepad} from 'react-icons/fa'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TextWrapper,
    Heading,
    Subtitle,
    TheText,
    Button
} from './InfoElements'
const InfoSection = ({lightBg, id, lightText, headline, darkText, description1, description2, description3, theSection}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <Heading lightText = {lightText}>{headline}</Heading>
                <InfoWrapper>
                <InfoRow theSection = {false}>
                        <TextWrapper darkText = {darkText}>
                            <Subtitle darkText = {darkText}>{description2}</Subtitle>
                                <TheText>
                                    A Web Application I developed using the Minimax Algorithm
                                </TheText>
                                <Button target = "__blank" href = "https://xogamexo.netlify.app/">
                                Play Game&nbsp; <FaGamepad/>
                            </Button>
                        </TextWrapper>
                        
                    </InfoRow>
                    <InfoRow theSection = {true}>
                        <TextWrapper darkText = {darkText}>
                            <Subtitle darkText = {darkText}>{description1}</Subtitle>
                                <TheText>
                                    A Website I developed for my friend's Art Portfolio.
                                </TheText>
                                <Button target = "__blank" href = "https://jlenn.net/">
                                    Check out website
                                </Button>
                        </TextWrapper>
                    </InfoRow>
                    <InfoRow theSection = {false}>
                        <TextWrapper darkText = {darkText}>
                            <Subtitle darkText = {darkText}>{description3}</Subtitle>
                                <TheText>
                                    Check out my Github for all of my project repositories
                                </TheText>
                                <Button target = "__blank" href = "https://github.com/ThomasJuric">
                                My Github&nbsp; <FaGithub/>
                            </Button>
                        </TextWrapper>
                        
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
