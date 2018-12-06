import axios from 'axios';
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_FETCH = 'ADD_FETCH';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const DELETE_FETCH = 'DELETE_FETCH';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH});
    console.log('fetched');
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: SUCCESS, payload: response.data});
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: err });
        })
}

export const addFriend = (newFriend) => dispatch => {
    dispatch({ type: ADD_FETCH});
    axios
        .post('http://localhost:5000/api/friends', newFriend)
        .then(response => {
            dispatch({ type: ADD_SUCCESS, payload: response.data});
        })
        .catch(err => {
            dispatch({ type: ADD_FAILURE, payload: err });
        })
}

export const deleteFriend = (id) => dispatch => {
    dispatch({ type: DELETE_FETCH});
    axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({ type: DELETE_SUCCESS, payload: response.data});
        })
        .catch(err => {
            dispatch({ type: DELETE_FAILURE, payload: err });
        })
}