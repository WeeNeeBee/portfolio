import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import programmer from '../assets/prowoman.png'
import resume from '../assets/resume-winnie.pdf'
// import 'animate.css'
// import TrackVisibility from "react-on-screen";




const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className = 'align-items-center'>
                    <Col xs = {12} md = {6} xl={7}>
                        <span className="tagline"><h2>Winnifred Ngwalang</h2></span>
                        <h1>Web Developer</h1>
                        <p>Hello, <br /> I am a Frontend Web Developer and a Photographer.</p>
                        <p>I am experienced in HTML, CSS, JS, React, Bootstrap, Adobe Photoshop and Adobe Lightroom.</p>
                        <a href={resume} download>
                            <button>Download Resume</button>
                        </a>
                    </Col>
                    <Col xs = {12} md = {6} xl={5}>
                        <img src ={programmer} alt='banner image' />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}



export default Banner;