import React, { useState } from 'react';
import axios from 'axios';

// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';

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

}

    return (

        <div className='login-form'>
            <form onSubmit={this.login}>
                <input 
                    type='text'
                    name='username'
                    label='Username'
                    value={}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    label='Password'
                    value={}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>

        <Button onClick={login}>Log In</Button>
    )
 };