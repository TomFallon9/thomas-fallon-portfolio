  
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.css'

function About() {
    return (
        <section id="about-section">
            <Container>
                <Row className="title-rows">
                    <Col><h2 className="section-titles"><span id="about-pipe" className="title-pipes">|</span> About Me</h2></Col>
                </Row>
                <Row>
                    <Col xs="12" sm="5" md="4" lg="3" className="text-center">
                        <img src="/images/head.png" alt="profile" className="image-fluid mr-md-4 mb-4 rounded shadow-sm float-md-left"/>
                    </Col>
                    <Col>
                        <h2 className="hello-txt">Hello! My name is Thomas Fallon.</h2>

                        <p>
Frontend Developer with a passion for responsive applications utilizing clean, polished, user interface and design. Proven leader using agile development practices to create full-stack apps with a remote team of developers. My background in state government and records management has given me experience with consulting, data analytics, and project work, but my real passion comes from tapping into my creative side. I enjoy problem-solving and bringing code to life for a great user experience. Interested in working with companies to help build and design innovative software products.
</p>

                       
                        

                       
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
