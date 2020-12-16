import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = {
    credentials: {
        username: '',
        password: ''
    },
    error: ''
};

const Login = () => {
    const [state, setState] = useState(initialState)

    const history = useHistory();

    const handleChanges = event => {
        setState({ ...state, credentials: { ...state.credentials, [event.target.name]: event.target.value}, error: '' });
    };

    const userLogin = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/login', state.credentials)
            .then(response => {
                window.localStorage.setItem('token', response.data.payload);
                history.push('/friends');
            })
            .catch(error => {
                setState({ ...state, error: error.response.data.error });
            });
    };

    return (
        <div>
            <form onSubmit={userLogin}>
                <input
                    name='username'
                    type='text'
                    value={state.credentials.username}
                    onChange={handleChanges}
                    placeholder='username'
                />
                <input
                    name='password'
                    type='password'
                    value={state.credentials.password}
                    onChange={handleChanges}
                    placeholder='password'
                />
                <button type='submit'>Submit</button>
            </form>
            <p>{state.error}</p>
        </div>
    )
}

export default Login;