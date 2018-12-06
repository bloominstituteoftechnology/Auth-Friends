import axios from 'axios';
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_FETCH = 'ADD_FETCH';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

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