import React from 'react';
import { Container, Row, Col, Card, CardText } from 'reactstrap';
import './Contact.css';

function Contact() {
    return (
        <section id="contact-section">
            <Container>
                <Row className="title-rows">
                    <Col><h2 className="section-titles"><span id="contact-pipe" className="title-pipes">|</span> Contact</h2></Col>
                </Row>
                <Row>
                    <Col xs="6" sm="3">
                        <Card body className="text-center contact-cards shadow-sm hvr-underline-from-center2">
                            <a href="https://TomFallon9@gmail.com">
                            <i className="fa fa-envelope " aria-hidden="true"></i>
                            <CardText className="">Email</CardText>
                            </a>
                        </Card>
                    </Col>
                    <Col xs="6" sm="3">
                        <Card body className="text-center contact-cards shadow-sm hvr-underline-from-center2">
                            <a href="tel:1-508-596-0900"> 
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <CardText>508-596-0900</CardText>
                            </a>
                        </Card>
                    </Col>
                    <Col xs="6" sm="3">
                        <Card body className="text-center contact-cards shadow-sm hvr-underline-from-center2">
                            <a href="https://github.com/tomfallon9" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github " aria-hidden="true"></i>
                            <CardText>GitHub</CardText>
                            </a>
                        </Card>
                    </Col>
                    <Col xs="6" sm="3">
                        <Card body className="text-center contact-cards shadow-sm hvr-underline-from-center2">
                            <a href="https://www.linkedin.com/in/thomas-fallon9/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square " aria-hidden="true"></i>
                            <CardText>LinkedIn</CardText>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;