import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';

const Landing = (props) => {
    return(
        <div className='landing'>
            <div className='landing-header'>
            <Links/>
            <button className='button is-outlined is-danger is-medium fetch-btn'>Get Friends</button>
            </div>
        </div>
    )
};

export default Landing;