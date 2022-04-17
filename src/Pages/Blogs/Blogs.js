import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {

    return (
        <div>
            <Container>
            <h1 className='blogs text-center mt-5'>Blogs</h1>
            <Row className='mt-4'>
                <Col lg={6} sm={12}>
                    <div>
                        <h4>1.Why are you using firebase? What other options do you have to implement authentication?</h4>
                        <p>i'm Using Firebase For Multipurposes First of all i'm using firebase for Authorised user and also i can build Authentication systeam using firebase Second Of all i'm Hosting Website Using Firebase and firebase is a data base thats why i can used firebase for store data .At this moment i have lot of firebase alternative for implement authentication
                            for example :</p>
                            <div className='text'>
                                <p>1. Paese</p>
                                <p>2. Back4App</p>
                                <p>3. AWS Amplify</p>
                                <p>4. Kuzzle</p>
                                <p>5. Couchbase</p>
                            </div>
                    </div>
                </Col>
                <Col lg={6} sm={12}>
                    <h4>2.What other services does firebase provide other than authentication?</h4>
                    <p>Firebase provide Lot of things First of all you can host website fully free in firebase and second of all firebase has real time database you can use firebase as a database and firebase provide cloud you can used cloud function And firbase provide lot of extenstion that you can used in your project</p>
                    <h4>3.Difference between authorization and authentication</h4>
                    <p>First Of All Authentication Means veryfying who some one is , i mean who are you whats your account is real or fake and you i mean user is real or fake and second of all authorization means veryfying whats specific applications, filses data and etc.</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Blogs;