import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const GET_ACCOUNT_START = 'GET_ACCOUNT_START';
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export const GET_ACCOUNT_FAILED = 'GET_ACCOUNT_FAILED';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export function login(username, password) {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    return axios
      .post('http://localhost:5000/api/login', { username, password })
      .then(res => {
        console.log('RES-DATA:', res.data);
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        const payload = err.response ? err.response.data : err;
        dispatch({ type: LOGIN_FAILED, payload });
      });
  };
}

export function getAccount() {
  return dispatch => {
    dispatch({ type: GET_ACCOUNT_START });

    const headers = {
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };

    axios
      .get('http://localhost:5000/api/friends', { headers })
      .then(res => {
        dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_ACCOUNT_FAILED, payload: err.response.data });
      });
  };
}
export function addFriend(friend) {
  return dispatch => {
    dispatch({ type: ADDING_FRIEND });

    const headers = {
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
    axios
      .post('http://localhost:5000/api/friends', friend, { headers })
      .then(res => {
        dispatch({ type: ADD_FRIEND, payload: res.data });
      });
  };
}

export function deleteFriend(id) {
  return dispatch => {
    dispatch({ type: DELETING_FRIEND });

    const headers = {
      Authorization: localStorage.getItem('token'),
      'Content-Type': 'application/json'
    };
    axios
      .delete(`http://localhost:5000/api/friends/${id}`, headers)
      .then(res => {
        dispatch({ type: DELETE_FRIEND, payload: res.data });
      });
  };
}
