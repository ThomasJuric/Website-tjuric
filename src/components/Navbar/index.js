import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
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
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to = "/" onClick = {toggleHome}>TJ</NavLogo>
                    <MobileIcon onClick = {toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem><NavLinks to="skills"
                        smooth = {true} duration = {500} spy = {true} exact = 'true' offset = {-80} activeClass="active"
                        >Skills</NavLinks></NavItem>
                        <NavItem><NavLinks to="projects"
                        smooth = {true} duration = {500} spy = {true} exact = 'true' offset = {-80} activeClass="active"
                        >Projects</NavLinks></NavItem>
                        <NavItem><NavLinks to="experience"
                        smooth = {true} duration = {500} spy = {true} exact = 'true' offset = {-80} activeClass="active"
                        >Experience</NavLinks></NavItem>
                    </NavMenu>
                    <CenterMenu>
                            
                    </CenterMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
