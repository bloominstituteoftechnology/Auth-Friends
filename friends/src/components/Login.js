import React, { useState} from 'react';
import axios from 'axios';

function Login(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push('/protected');
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <div>
            <form onSubmit={login} />
            <input type='text' name='username' placeholder='username' value={data.username} onChange={handleChange} />
            <input type='password' name='password' placeholder='password' value={data.password} onChange={handleChange} />
            <button type='submit'>Login</button>
        </div>
    )
}

export default Login;