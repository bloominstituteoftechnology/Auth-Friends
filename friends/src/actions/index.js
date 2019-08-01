import axios from 'axios';
import { axiosWithAuth } from '../utilities';

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADDING_FRIEND_SUCCESS = "ADDING_FRIEND_SUCCESS";
export const ADDING_FRIEND_FAIL = "ADDING_FRIEND_FAIL";

export const attemptLogin = (username, password) =>  dispatch => {
    dispatch({type: LOGIN});
    axios.post("/api/login", {username, password}).then(res => {
        //console.log('loginAttempt: ', res);
        dispatch({type: LOGIN_SUCCESS, payload: { token: res.data.payload, username: username}});
    }).catch(err => {
        //console.log(err);
        dispatch({type: LOGIN_FAIL, error: err});
    })
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
    axiosWithAuth().get("/api/logout").then(res => {
        console.log(res);
        dispatch({type: LOGOUT_SUCCESS, payload: res.data});
    }).catch(err => {
        console.error(err);
        dispatch({type: LOGOUT_FAIL, error: err});
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

export const addFriend = (friend) => dispatch => {
    dispatch({type: ADDING_FRIEND});
    let newFriend = {...friend, age: parseInt(friend.age)};
    axiosWithAuth().post("/api/friends", newFriend).then(res => {
        console.log(res);
        dispatch({type: ADDING_FRIEND_SUCCESS, payload: res.data})
    }).catch(err => {
        console.error(err);
        dispatch({type: ADDING_FRIEND_FAIL, error: err});
    });
}