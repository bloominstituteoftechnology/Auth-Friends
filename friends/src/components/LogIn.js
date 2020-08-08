import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LogIn = () => {
    const [credentials, setCradentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = e => {
        setCradentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log('login success: res', res);
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => {
                console.log('login failed: err', err.message);
                localStorage.removeItem('token')
            })
    };

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    placeholder='UserName'
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='password'
                    value={credentials.password}
                    placeholder='PassWord'
                    onChange={handleChange}
                />

                <button className='btn'>Log In</button>
            </form >
        </div>
    )
}

export default LogIn;