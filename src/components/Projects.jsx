
import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCards from './ProjectCards'
import books from '../assets/books.png'
import lamcious from '../assets/lamcious.png'
import otaffair from '../assets/otaffair.png'
import portfolio from '../assets/porfolio.png'


const Projects = () => {
    const oldProjects = [
        {
            title: 'Wedding Website',
            description: 'Wedding Web Gallery',
            imgUrl: otaffair,
            link: 'https://otaffairs.netlify.app/'
        },
        {
            title: 'TWMC',
            description: "The Women's Murder Club Series is a series of crime and investigation books by James Patterson.",
            imgUrl: books,
            link: 'https://weeneebee.github.io/TWMC/'
        },
        {
            title: 'Wedding Website',
            description: 'Wedding Web Gallery',
            imgUrl: lamcious,
            link: 'https://lamcious.netlify.app/'
        }

    ]
    const newProjects = [
        {
            title: 'Wedding Website',
            description: 'Wedding Web Gallery',
            imgUrl: otaffair,
            link: 'https://otaffairs.netlify.app/'
        },
        {
            title: 'Portfolio',
            description: 'A FrontEnd webdev porfolio',
            imgUrl: portfolio,
            link:'https://weeneebee.netlify.app/'
        },
        {
            title: 'Wedding Website',
            description: 'Wedding Web Gallery',
            imgUrl: lamcious,
            link: 'https://lamcious.netlify.app/'
        }
    ]
    return(
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id='project-tabs' defaultActiveKey = "one">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="one">Recent Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="two">Old Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three">Working On</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='one'>
                                    <Row>
                                        {
                                            newProjects.map((project, index) => {
                                                return(
                                                   <ProjectCards 
                                                   key = {index}
                                                   {...project}
                                                   />
                                                )
                                            }

                                            )
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = 'two'>
                                    <Row>
                                            {
                                                oldProjects.map((project, index) => {
                                                    return(
                                                        <ProjectCards 
                                                   key = {index}
                                                   {...project}
                                                   />
                                                    )
                                                }

                                                )
                                            }
                                        </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey = 'three'>
                                    <p>Soon...</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}




export default Projects