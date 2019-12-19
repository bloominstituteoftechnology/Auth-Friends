import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true)
        axiosWithAuth().post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push("/friend-list");
            })
            .catch(err => console.log(err.response))
    }


    return(
        <form onSubmit={handleSubmit}>
            {isLoading && <div>Hang tight...</div>}
            <input type="text" name="username" value={credentials.username} onChange={handleChange} />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} />
            <button type="submit">Log in</button>
        </form>
    )
}

export default Login;