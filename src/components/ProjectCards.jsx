import React from "react"
import { Col } from 'react-bootstrap'


const ProjectCards = ({ title, description, imgUrl, link}) => {
    return(
            <Col sm ={6} md = {4}>
                <div className="proj-imgbx">
                    <img src={imgUrl} alt='project-images' />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span><br />
                        <a href={link}>
                            <button>VIEW</button>
                        </a>
                    </div>
                </div>
            </Col>
    )
}



export default ProjectCards