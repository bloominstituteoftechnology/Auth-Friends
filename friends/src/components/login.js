import React, { useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

export default function Login(props) {

const [credentials, setCredentials] = useState({
    username: '',
    password: ''
});

const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
};

const login = e => {
    e.preventDefault();
    axiosWithAuth()
        .post(`/login`, credentials) //POST request sends info to route as an object and double checks credentials
        .then(res => {
            // console.log(res)
            localStorage.setItem('token', res.data.payload); 
            //Puts in a key called token with a value of data.payload
            props.history.push('/friends'); //Once logging in, sends them to the protected/logged in page
        })
        .catch((err) => {
            console.log('Err is: ', err);
        })
};

    return (

        <div className='login-form'>
            <form onSubmit={login}>
                <input 
                    type='text'
                    name='username'
                    label='Username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    label='Password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
 };