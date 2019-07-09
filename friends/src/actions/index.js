import axios from 'axios';
import { axiosWithAuth } from '../utilities';

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const attemptLogin = (username, password) =>  dispatch => {
    dispatch({type: LOGIN});
    axios.post("/api/login", {username, password}).then(res => {
        //console.log('loginAttempt: ', res);
        dispatch({type: LOGIN_SUCCESS, payload: { token: res.data.payload}});
    }).catch(err => {
        //console.log(err);
        dispatch({type: LOGIN_FAIL, error: err});
    })
}

export const fetchFriends = () => dispatch => {
    dispatch({type: FETCHING});
    axiosWithAuth().get("/api/friends").then(res => {
        console.log(res);
        dispatch({type: FETCH_SUCCESS, payload: res.data});
    }).catch(err => {
        dispatch({type: FETCH_FAIL, error: err});
    })
}