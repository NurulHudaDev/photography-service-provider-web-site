import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className='about-tital'>
            <h1>About</h1>
            <Container className='about-contenar'>
                <Row>
                    <Col lg={6} sm={12} className='img'>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                    </Col>
                    <Col lg={6} sm={12} className='about'>
                        <h4>MY LITTLE STORY</h4>
                        <h5>Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa</h5>
                        <hr />
                        <p>Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in diem sed eius mod tempor incidunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus piros labore et dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
                            Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius lacinia vestibulum. Aliquam lobortis facilisis tellus, in facilisis ex vehicula ac. In malesuada quis turpis vel viverra.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;