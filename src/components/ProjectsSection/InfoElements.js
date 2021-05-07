import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;

    background: ${({lightBg}) => (lightBg ? '#fcf4f2' : '#010606')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    z-index: 1;
    height: 700px;
    max-width: 1100px;
    margin: auto;
    margin-top: 5%;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 500px) {
        height: 400px;
    }
`

export const InfoRow = styled.div`
    grid-auto-columns: minmax(auto, 1fr);
    background: ${({theSection}) => (theSection ? '#fcf4f2' : '#f5ece9')};
    width: 100%;
    border-radius: 10px;
    padding: 30px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 500px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`

export const Column1 = styled.div`
    padding: 0 15px;
`
export const Column2 = styled.div`
    padding: 0 15px;
`

export const TextWrapper = styled.div`
    color:${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    padding-top: 5%;
    font-size: 58px;
    line-height: 1.1;
    text-align: center;
    font-weight: bold;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;

    }
`

export const Subtitle = styled.p`
    font-size: 35px;
    line-height: 30px;
    font-weight: bold;
    color:${({darkText}) => (darkText ? '#010606' : '#fff')};
    @media screen and (max-width: 768px) {
        font-size: 20px;

    }
`

export const TheText = styled.p`
    font-size: 20px;
    line-height: 20px;
    @media screen and (max-width: 768px) {
        font-size: 17px;

    }
` 

export const Button = styled.a`
    border-radius: 30px;
    white-space: nowrap;
    font-size: .81rem;
    font-weight: bold;
    color: black;
    max-width: 70%;
    outline: none;
    padding: 14px 30px;
    border: solid black 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid black 5px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        transition: all 0.2 ease-ease-in-out;
        background: white;
        cursor: pointer;
        color: #045459;
        text-decoration: none;
    }
    @media screen and (max-width: 768px) {
        font-size: .88rem;


    }
    
`