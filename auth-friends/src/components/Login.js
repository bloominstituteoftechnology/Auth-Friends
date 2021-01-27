import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
    const [loginValues, setLoginValues] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setLoginValues({
            ...loginValues,
            [e.target.name]: e.target.value
        })
        console.log(loginValues)
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/login')
        .then((res) => {
            localStorage.setItem('token', res.data.payload)
            this.props
        })
    }

    return(
        <div className='App'>
            <form onSubmit={login}>
                <label>Username: &nbsp;</label>
                <input
                type='text'
                name='username'
                value={setLoginValues.username} 
                />
                <label>Password: &nbsp;</label>
                <input 
                type='password'
                name='password'
                value={setLoginValues.password}
                />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Login;