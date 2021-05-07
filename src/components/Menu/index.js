

import React from 'react'
import {
    MenuContainer,
    Icon,
    CloseIcon,
    MenuWrapper, 
    MenuOptions,
    MenuLink
} from './MenuStyle';


const Menu = ( {isOpen, toggle}) => {
    return (
            <MenuContainer isOpen = {isOpen} onClick = {toggle}>
                <Icon onClick = {toggle}>
                    <CloseIcon/>
                </Icon>
                <MenuWrapper>
                    <MenuOptions>
                        <MenuLink to='home' onClick = {toggle}>Home</MenuLink>
                        <MenuLink to='skills' onClick = {toggle}>Skills</MenuLink>
                        <MenuLink to="experience" onClick = {toggle}>Experience</MenuLink>
                        <MenuLink to="projects" onClick = {toggle}>Projects</MenuLink>
                    </MenuOptions>
                </MenuWrapper>
            </MenuContainer>  
    )
}

export default Menu;
