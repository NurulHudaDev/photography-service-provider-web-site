import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer'>
            <Container>
            <div className='footer-contenar'>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <h2>About Me</h2>
                        <p>My name is Jonathan Davis and I’m professional photographer and retoucher. I’m offering my services to individual and corporate clients throughout the USA. Make your favorite life moment or event last and remain in your memory!</p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h2>Contact Information</h2>
                        <h5>2130 Fulton Street
                            San Diego, CA 94117-1080 USA</h5>
                        <h5>1-800-1234-678</h5>
                        <h5>info@demolink.org</h5>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h2>Newsletter</h2>
                        <p>Sign up to our newsletter and be the first to know about latest news, special offers, events, and discounts.</p>
                        <input type="email" name="" id="" placeholder='Email'/>
                    </Col>
                </Row>
            </div>
            </Container>
        </div>
    );
};

export default Footer;