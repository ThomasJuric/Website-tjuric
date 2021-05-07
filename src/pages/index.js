import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import ExperienceSection from '../components/ExperienceSection'
import Projects from '../components/ProjectsSection'
import { homeObjOne } from '../components/InfoSection/Data'
import { Experience } from '../components/ExperienceSection/Data'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import { projectOne } from '../components/ProjectsSection/Data'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <Menu isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <ExperienceSection {...Experience}/>
            <Projects {...projectOne}/>
            <Footer/>
        </>
    )
}

export default Home
