import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
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
        </>
    )
}

export default Home
