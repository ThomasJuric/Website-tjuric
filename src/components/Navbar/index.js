import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    CenterMenu
    }    from './NavbarStyle'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to = "/">TJ</NavLogo>
                    <MobileIcon onClick = {toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem><NavLinks to="skills">Skills</NavLinks></NavItem>
                        <NavItem><NavLinks to="projects">Projects</NavLinks></NavItem>
                        <NavItem><NavLinks to="experience">Experience</NavLinks></NavItem>
                    </NavMenu>
                    <CenterMenu>
                            
                    </CenterMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
