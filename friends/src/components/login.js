import React, { useState } from 'react';


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
    // axios <-- axios call eventually moved to friends.js file
    //     .post(`http://localhost:5000`, credentials) //sends info to route and double checks credentials
    //     .then((res) => {
    //         console.log(res)
    //         window.localStorage.setItem('token', res.data.payload); //Puts in a key called token with a value of data.payload
    //         props.history.push('/friends'); //Once logging in, sends them to the protected/logged in page
    //     })
    //     .catch((err) => {
    //         console.log('Err is: ', err);
    //     })
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