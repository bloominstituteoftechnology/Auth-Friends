import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Body = styled.div`
margin: 5%;
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
border-top: 2px solid #282c34;
`

const Button = styled.button`
margin: 5%;
width: 35%;
background-color: #282c34;
color: white;
padding: 1%;
border-radius: 8px;
`

    const Login = props => {
    
    const [credentials, setCredentials] = useState({username:'', password:''})

    const handleChange = e => {
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        );
    };

    const login = e => {
        e.preventDefault();
    // make a POST request to the server
    // the server will "authenticate" the user based on their credentials
    // If they can be authenticated the server will return a token
        axios
        .post('http://localhost:5000/api/login', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/myfriends');
        })
        .catch(err => console.log(err));
    };

        return (
        <Body>
            <h2> Login </h2>
            <Form onSubmit={login}>
            <p>Username</p>
            <input
                label="Username:"
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
            />
            <p>Password</p>
            <input
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
            />
            <Button>Log in</Button>
            </Form>
        </Body>
        );
};

export default Login;
