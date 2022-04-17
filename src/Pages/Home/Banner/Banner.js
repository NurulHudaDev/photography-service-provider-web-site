import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {

    return (
        <div>
            <div className='top-banner'>
                <div className='top-banner-contenar'>
                    <div className='banner-contenar'>
                        <Row>
                            <Col>
                                <h4>WELCOME TO</h4>
                                <h2>oshine photography</h2>
                                <p>A Lifestyle Photographer based in Paris, France</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;