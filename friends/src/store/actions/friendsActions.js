import axios from 'axios';

export const FRIENDS_FETCH_START = 'FRIENDS_FETCH_START';
export const FRIENDS_FETCH_COMPLETE = 'FRIENDS_FETCH_COMPLETE';
export const FRIENDS_FETCH_FAILURE = 'FRIENDS_FETCH_FAILURE';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_COMPLETE = 'ADD_FRIEND_COMPLETE';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const getAvengers = () => dispatch => {
    dispatch({ type: FRIENDS_FETCH_START });
    const promise = axios.get('http://localhost:5000/friends');

    promise
        .then(response => {
            dispatch({ type: FRIENDS_FETCH_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: FRIENDS_FETCH_FAILURE, payload: err });
        });
};

export const addNewFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_START });

    axios.post('http://localhost:5000/friends', friend)
        .then(response => {
            dispatch({ type: ADD_FRIEND_COMPLETE, payload: response.data });
        }).catch(err => {
            dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
        });
}