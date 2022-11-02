import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import bee from '../assets/weeneebee-logo.png'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'


const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    },[])

    const handleActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled? 'scrolled': ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <div className='weenee-brand'>
                        <span className = 'brand-logo'>WeeNee</span>
                        <img src = {bee} alt = 'weeneebee-logo'/>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    {/* <span className = 'navbar-toggle-icon'></span> */}
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className = {activeLink === 'home'? 'active navbar-link': 'navbar-link'} onClick={() => handleActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className = {activeLink === 'skills'? 'active navbar-link': 'navbar-link'} onClick={() => handleActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className = {activeLink === 'projects'? 'active navbar-link': 'navbar-link'} onClick={() => handleActiveLink('projects')}>Projects</Nav.Link>
                    </Nav> 
                    <span className ='navbar-text'>
                        <div className = 'social-icon'>
                            <a href = 'https://github.com/WeeNeeBee'><BsGithub className='s-icon' /></a>
                            <a href = 'https://instagram.com/aphonographer'><AiFillInstagram className='s-icon' /></a>
                            <a href = 'https://linkedin.com/in/winnifred'><BsLinkedin className='s-icon' /></a>
                        </div>
                        <a href='#footer'>
                            <button className = 'vvd'>
                                <span>Let's connect</span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;