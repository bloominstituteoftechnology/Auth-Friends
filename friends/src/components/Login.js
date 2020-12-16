import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import styled from 'styled-components';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .inputField{
      margin-top: .5rem;
  }
`

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
                window.location.reload(true)
            })
            .catch(error => {
                setState({ ...state, error: error.response.data.error });
            });
    };

    return (
        <StyledLogin>
            <form onSubmit={userLogin}>
                <div className='inputField'>
                    <input
                        name='username'
                        type='text'
                        value={state.credentials.username}
                        onChange={handleChanges}
                        placeholder='username'
                    />
                </div>
                <div className='inputField'>
                    <input
                        name='password'
                        type='password'
                        value={state.credentials.password}
                        onChange={handleChanges}
                        placeholder='password'
                    />
                </div>
                <div className='inputField'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <p>{state.error}</p>
        </StyledLogin>
    )
}

export default Login;