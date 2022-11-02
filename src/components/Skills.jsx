import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiJavascript, SiAdobephotoshop, SiAdobelightroom } from 'react-icons/si'
import { FcOldTimeCamera } from 'react-icons/fc'


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }

    return(
        <div>
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx'>
                                <h2>Skills</h2>
                                <p>I am experienced in the following areas...</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                    <div className='item'>
                                        <FaHtml5 className='skill-logo html' />
                                        <h6>HTML</h6>
                                    </div>
                                    <div className='item'>
                                        <FaCss3Alt className='skill-logo css' />
                                        <h6>CSS</h6>
                                    </div>
                                    <div className='item'>
                                        <FaBootstrap className='skill-logo bootstrap' />
                                        <h6>BOOTSTRAP</h6>
                                    </div>
                                    <div className='item'>
                                        <SiJavascript className='skill-logo js' />
                                        <h6>JAVASCRIPT</h6>
                                    </div>
                                    <div className='item'>
                                        <FaReact className='skill-logo react' />
                                        <h6>REACT</h6>
                                    </div>
                                    <div className='item'>
                                        <SiAdobelightroom className='skill-logo lr' />
                                        <h6>LIGHTROOM</h6>
                                    </div>
                                    <div className='item'>
                                        <SiAdobephotoshop className='skill-logo ps' />
                                        <h6>PHOTOSHOP</h6>
                                    </div>
                                    <div className='item'>
                                        <FcOldTimeCamera className='skill-logo photo' />
                                        <h6>PHOTOGRAPHY</h6>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}



export default Skills;