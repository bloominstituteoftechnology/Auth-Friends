import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

const url = 'http://localhost:5000/api/friends/';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START});
    axios
        .get(url)
        .then(response => {
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_FRIENDS_FAILURE, payload: error })
        });
}

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_START});
    axios
        .post(url, friend)
        .then(response => {
            console.log(response.data);
            dispatch({ type: ADD_FRIEND_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: ADD_FRIEND_FAILURE, payload: error })
        });
}