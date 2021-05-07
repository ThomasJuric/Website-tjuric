

import React from 'react'

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    TheText
} from './InfoElements'
const InfoSection = ({lightBg, id, lightText, headline, topLine, topLine2, darkText, description1, description2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <Heading lightText = {lightText}>{headline}</Heading>
                <InfoWrapper>
                        <InfoRow>
                            <TextWrapper darkText = {darkText}>
                                <Subtitle darkText = {darkText}>{description1}</Subtitle>
                                <TopLine>{topLine}</TopLine>
                                    <TheText>Used HTML/CSS, JavaScript, Drupal, & Pantheon to develop websites under University of Guelph domain</TheText>
                                    <TheText>Coordinated over 50 training workshops to teach clients necessary web development tools</TheText>
                                    <TheText>Participated in daily Agile Scrum meetings with the team to organize tasks for upcoming sprints</TheText>
                                    <TheText>Facilitated the launch of 3 event sites, through developing around the clients’ satisfactions</TheText>
                                    <TheText>Engaged in the Interview Process organized by Scrum Master, was part of the hiring team for new Co-op’s</TheText>
                                    <TheText>Lead the On-Boarding process for the new Co-op student, prepared them with training & knowledge transfer</TheText>
                            </TextWrapper>
                        </InfoRow>
                    <InfoRow>
                        <TextWrapper darkText = {darkText}>
                            <Subtitle darkText = {darkText}>{description2}</Subtitle>
                            <TopLine>{topLine2}</TopLine>
                                    <TheText>Assisted team by communicating with co-workers & customers to develop route patterns for drivers</TheText>
                                    <TheText>Assisted clients throughout the moving process & resolved inquiries through phone and email communication</TheText>
                                    <TheText>Worked with team to organize & distribute tickets to boost productivity and organization among tasks</TheText>
                        </TextWrapper>
                        </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
