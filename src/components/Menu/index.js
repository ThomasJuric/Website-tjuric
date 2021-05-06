import React from 'react'
import {
    MenuContainer,
    Icon,
    CloseIcon,
    MenuWrapper, 
    MenuOptions,
    MenuLink
} from './MenuStyle';

const Menu = () => {
    return (
        <>
            <MenuContainer>
                <Icon>
                    <CloseIcon/>
                </Icon>
                <MenuWrapper>
                    <MenuOptions>
                        <MenuLink to='skills'>Skills</MenuLink>
                        <MenuLink to="projects">Projects</MenuLink>
                        <MenuLink to="experience">Experience</MenuLink>
                    </MenuOptions>
                </MenuWrapper>
            </MenuContainer>  
        </>
    )
}

export default Menu;
