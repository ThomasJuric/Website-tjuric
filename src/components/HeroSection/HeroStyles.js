import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 940px;
    position: relative;
    z-index: 10;
    
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2a2a34;
    overflow:hidden;
    background: #0c0c0c;
`

// export const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     z-index: -3;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: #2a2a34;
//     filter: brightness(30%);
// `

export const HeroContent = styled.div`
    background: #1E1E1E;
    width: 70%;
    border-radius: 30px;
    position: absolute;
    padding: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 2px;
    color: gray;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialLink = styled.a`
    color: white;
    font-size: 60px;
`

export const Line = styled.hr`
    border-top: 1px solid gray;
    width: 70%;
`