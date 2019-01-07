import axios from 'axios';

export const GET_FRIENDS_LOADING = 'GET_FRIENDS_LOADING';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const GET_FRIEND_LOADING = 'GET_FRIEND_LOADING';
export const GET_FRIEND_SUCCESS = 'GET_FRIEND_SUCCESS';
export const GET_FRIEND_FAILURE = 'GET_FRIEND_FAILURE';

export const ADD_FRIEND_LOADING = 'ADD_FRIEND_LOADING';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const EDIT_FRIEND_LOADING = 'EDIT_FRIEND_LOADING';
export const EDIT_FRIEND_SUCCESS = 'EDIT_FRIEND_SUCCESS';
export const EDIT_FRIEND_FAILURE = 'EDIT_FRIEND_FAILURE';

export const REMOVE_FRIEND_LOADING = 'REMOVE_FRIEND_LOADING';
export const REMOVE_FRIEND_SUCCESS = 'REMOVE_FRIEND_SUCCESS';
export const REMOVE_FRIEND_FAILURE = 'REMOVE_FRIEND_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_LOADING });
  axios
    .get(`http://localhost:5000/api/friends/`)
    .then(res => {
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_FRIENDS_FAILURE, payload: err }));
};

export const getFriend = id => dispatch => {
  dispatch({ type: GET_FRIEND_LOADING });
  axios
    .get(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: GET_FRIEND_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: GET_FRIEND_FAILURE, payload: err }));
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_LOADING });
  axios
    .post(`http://localhost:5000/api/friends/`, friend)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
};

export const editFriend = (id, friend) => dispatch => {
  dispatch({ type: EDIT_FRIEND_LOADING });
  axios
    .put(`http://localhost:5000/api/friends/${id}`, friend)
    .then(res => {
      dispatch({ type: EDIT_FRIEND_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: EDIT_FRIEND_FAILURE, payload: err }));
};

export const removeFriend = id => dispatch => {
  dispatch({ type: REMOVE_FRIEND_LOADING });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: REMOVE_FRIEND_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: REMOVE_FRIEND_FAILURE, payload: err }));
};
