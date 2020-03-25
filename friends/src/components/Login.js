import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
    const [login, setLogin] = useState({username: '', password: ''});
    const [error, setError] = useState('');
    const history = useHistory();
    const handleChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/login', login)
            .then((response) => {
                localStorage.setItem('token', response.data.payload);
                setError('');
                history.push('/friend_list')
            })
            .catch((error) => setError(error.response.data.error));
        setLogin({username: '', password: ''});
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='formRow'>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username' value={login.username} onChange={handleChange}/>
            </div>
            <div className='formRow'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' value={login.password} onChange={handleChange}/>
            </div>
            <button type='submit'>Login</button>
            {error ? <p className='error'>{error}</p> : undefined }
        </form>
    )
}

export default Login;