import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {img, name, id} = service;
    const neviget = useNavigate();
    const nevigeteToServiceDeatial = id =>{
        neviget(`/Service/${id}`);
    }
    return (
        <div className='service'>
            <img className='card' src={img} alt="" />
            <h2>{name}</h2>
            <button onClick={()=> nevigeteToServiceDeatial(id)} className='service-button'>Service</button>
        </div>
    );
};

export default Service;