  
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

                        <p>I'm a full-stack web developer. Attended the University of New Hampshire Coding Bootcamp, an intensive 6-month-long program dedicated to designing and building web applications. I learned HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handlebars, and React.</p>

                        <p>My background in political science and records management has given me experience with consulting, data analytics and project work, but my real passion comes from tapping into my creative side. I enjoy problem-solving and bringing code to life for a great user experience!</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;