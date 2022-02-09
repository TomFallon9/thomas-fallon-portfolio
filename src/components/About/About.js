
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
                        <img src="/images/head.jpg" alt="profile" className="tom-headshot image-fluid mr-md-4 mb-4 rounded shadow-sm float-md-left" />
                        

                    </Col>
                    <Col>
                        <h2 className="hello-txt">Hello! My name is Thomas.</h2>

                        <p>
                            I am an experienced Frontend Developer with a passion for responsive applications utilizing clean, polished, user interface and design. Focused on being a valuable part of any team I am on and believe in the team rising together.If one portion of the team needs help with a task, I have no issue jumping in to assist on anything required. Proven leader incorporating agile development methodologies with remote/hybrid teams. Responsibilities include collaborating with design teams, back-end engineers and product owners, by turning mocks and ideas into live features/products at DepositLink.

                            Reliable Front-End Lead at a fast-growing, cutting-edge SAAS (FinTech) start-up. Responsible for scaling the product's UI/UX top to bottom, assigning tasks and managing solo projects throughout the full development life cycle to production.
                        </p>







                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;
