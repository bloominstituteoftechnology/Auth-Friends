import React, { useState } from 'react';
import axios from 'axios';



    const Login = props => {
            const [credentials, setCredentials] = useState({username:'', password:''})
            const [isLoading, setIsLoading] = useState(false);

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
            props.history.push('/protected');
        })
        .catch(err => console.log(err));
    };

        return (
        <div>
            <form onSubmit={login}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button>Log in</button>
            </form>
        </div>
        );
};

export default Login;
