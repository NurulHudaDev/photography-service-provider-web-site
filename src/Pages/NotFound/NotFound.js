import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import notFound from '../../images/not-found.jpg';
import './NotFound.css';
const NotFound = () => {

    return (
        <div className='not-found'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-not-found text-center text-danger mt-5'>NotFound</h1>
                        <img src={notFound} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;