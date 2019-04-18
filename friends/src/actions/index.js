import axios from 'axios';
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const handleLogin = state => dispatch => {
    console.log(state)
    dispatch({ type: LOGIN_START })
    const baseUrl = 'http://localhost:5000'
    axios
        .post(`${baseUrl}/api/login`, state)
        .then( res => dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })) 
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err}))
};
