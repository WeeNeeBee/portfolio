import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import {MdCall} from 'react-icons/md'
import bee from '../assets/weeneebee-logo.png'


const Footer = () => {
    return(
        <footer className="footer" id="footer">
            <div className="footer-flex">
                <div>
                        <div>
                            <a href="tel:+2348139778459" className="call">
                                <MdCall />
                                +2348139778459
                            </a>
                        </div>
                </div>
                <div>
                    <div className='footer-weenee-brand footer-contact'>
                        <a href="#home">
                            <span className = 'brand-logo'>WeeNee</span>
                            <img src = {bee} alt = 'weeneebee-logo'/>
                        </a>
                    </div>
                </div>
                <div>
                    <div className = 'social-icon'>
                        <a href = 'https://github.com/WeeNeeBee'><BsGithub className='s-icon' /></a>
                        <a href = 'https://instagram.com/weng.tech'><AiFillInstagram className='s-icon' /></a>
                        <a href = 'https://linkedin.com/in/winnifred'><BsLinkedin className='s-icon' /></a>
                    </div>
                </div>
            </div>
            <p>&copy; 2022 WeeNeeBee</p>
        </footer>
    )
}



export default Footer;