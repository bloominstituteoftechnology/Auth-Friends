import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
        axios.get(`${baseUrl}/api/friends`)
            .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res}))
            .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err}))
}

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FRIEND_START});
        axios.delete(`${baseUrl}/api/friends/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
}