import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
    const [login, setLogin] = useState({
            username: '',
            password: ''
        });

    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', login)
            .then((res) => {
                localStorage.setItem('token', res.data.payload);
                history.push('/friends')
            })
            .catch(err => console.log(err.response));
        setLogin({username: '', password:''})
    };

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        name='username'
                        placeholder='username'
                        value={login.username}
                        onChange={handleChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={login.password}
                        onChange={handleChange}
                    />
                    <button type='submit'>Log in</button>
                </form>
            </div>
        );
}

export default Login;