import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll';

export const MenuContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #292929;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    z-index: ${({ isOpen }) => (isOpen ? '999' : '-2')};
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`

export const CloseIcon = styled(FaTimes)`
    color: white;
    &:hover {
        color: #0AEFFF;
        transition: 0.2s ease-in-out;
        text-decoration: none
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent; 
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    
`
export const MenuWrapper = styled.div`
    color:#fff;
`

export const MenuOptions = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,100px);
    text-align: center;
    
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6,90px);
        
    }
`
export const MenuLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: white;
    cursor: pointer;

    &:hover {
        color: #0AEFFF;
        transition: 0.2s ease-in-out;
        text-decoration: none
    }
`
