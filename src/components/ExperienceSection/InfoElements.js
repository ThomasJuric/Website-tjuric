import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#292929')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 5%;
    padding: 0 24px;
    overflow: auto;
    justify-content: center;

    @media screen and (max-width: 520px) {
        border-top: solid 0.5px #212121;
        padding-top: 4px;
        height: 400px;
    }

`

export const InfoRow = styled.div`
    grid-auto-columns: minmax(auto, 1fr);
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
    padding-bottom: 60px;
    padding-left: 10px;
    color:${({darkText}) => (darkText ? '#292929' : '#fff')};
`

export const TopLine = styled.p`
    color: #0AEFFF;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 13px;
        letter-spacing: 1.0px;
        font-weight: 500;

    }
`

export const Heading = styled.h1`
    padding-top: 5%;
    font-size: 58px;
    text-align: center;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#0c0c0c')};

    
    @media screen and (max-width: 480px) {
        font-size: 32px;

    }
`

export const Subtitle = styled.p`
    font-size: 35px;
    line-height: 30px;
    text-align: center;
    color:${({darkText}) => (darkText ? '#010606' : '#fff')};
    @media screen and (max-width: 768px) {
        font-size: 20px;

    }
`

export const TheText = styled.li`
    font-size: 20px;
    line-height: 25px;
    margin-top: 5px;
    @media screen and (max-width: 768px) {
        font-size: 17px;
    }
` 

export const Button = styled.button`
    border-radius: 10px;
    white-space: nowrap;
    font-size: 15px;
    outline: none;
    padding: 14px 30px;
    border: solid black 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid black 5px;
    &:hover {
        transition: all 0.2 ease-ease-in-out;
        background: white;
    }
`