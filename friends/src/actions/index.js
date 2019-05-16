import axios from 'axios';
import axiosAuth from '../utils/axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
            })
    .catch(err => {
        dispatch({ type:LOGIN_FAILURE })
    })
}

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = data => dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axiosAuth()
    .get('/api/friends')
    .then(res =>{
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.payload })
    } )
    .catch(err=> {
        dispatch({ type: FETCH_DATA_FAILURE})
    })
}
