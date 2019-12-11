import React, { useState } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../axiosAuth';

const Container = styled.section`

    position: absolute
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    padding: 5%;
    border: 2px solid black;
    

    form {

        display: flex;
        flex-flow: column;

        input {

            margin-bottom: 2%;
        }

        button {

            background: black;
            color: white;
            border: none;
            outline: none;
            padding 4%;
            margin-top: 3%;

            &:hover {

                background: white;
                color: black;
                border: 1px solid black;
            }
        }

    }

`;

const Login = (props) => {

    const [credentials, setCredentials] = useState({ username: 'Lambda School', 
                                                    password: 'i<3Lambd4'});

    const handleSubmit = e => {

        e.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/login", credentials)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friendsList');
        })
        .catch( err => {
            console.log(err);
        })
    }

    const handleChange = e => {

        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Container>

            <form onSubmit={handleSubmit}>
                <input
                onChange={handleChange}
                name="username"
                placeholder="Enter Username"></input>
                <input
                onChange={handleChange}
                name="password"
                placeholder="Enter password"></input>
                <button type="submit">Login</button>
            </form>
        </Container>
    )
}

export default Login;