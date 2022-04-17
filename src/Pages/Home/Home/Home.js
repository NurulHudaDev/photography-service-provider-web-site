import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Services/Services';
import RequireAuth from '../../RequireAuth/RequireAuth';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
        </div>
    );
};

export default Home;