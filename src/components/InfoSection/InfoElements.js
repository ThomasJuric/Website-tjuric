import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#fcf4f2' : '#010606')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    align-self: center;
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
    max-width: 540px;
    padding-bottom: 60px;
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
    font-weight: bold;
    text-align: center;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;

    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    font-size: 35px;
    line-height: 24px;
    font-weight: bold;
    color:${({darkText}) => (darkText ? '#010606' : '#fff')};
    @media screen and (max-width: 768px) {
        font-size: 25px;

    }
`
export const TheText = styled.li`
    font-size: 20px;
    line-height: 55px;

    margin-top: 5px;
    @media screen and (max-width: 768px) {
        font-size: 15px;
        line-height: 35px;


    }
` 