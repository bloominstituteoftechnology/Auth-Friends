import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

export const FRIENDS_START = "FRIENDS_START";
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS";
export const FRIENDS_FAILURE = "FRIENDS_FAILURE";

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

const baseUrl = "http://localhost:5000";

export const handleLogin = user => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(`${baseUrl}/api/login`, user)
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload }))
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

export const handleGetFriends = token => dispatch => {
  dispatch({ type: FRIENDS_START });
  axios
    .get(`${baseUrl}/api/friends`, { headers: { authorization: token } })
    .then(res => dispatch({ type: FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FRIENDS_FAILURE, payload: err }));
};

export const handleAddFriend = (token, friend) => dispatch => {
  dispatch({ type: ADD_START });
  console.log(token);
  axios
    .post(`${baseUrl}/api/friends`, friend, {
      headers: { authorization: token }
    })
    .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FAILURE, payload: err }));
};

export const handleLogout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
