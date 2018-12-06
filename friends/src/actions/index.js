import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axios
        .get('http://localhost:5000/friends')
        .then(res => {
            console.log(res);
            dispatch({
                type: FETCH_FRIENDS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: FETCH_FRIENDS_FAILURE,
            payload: err }))
}

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_START });
    axios
        .post('http://localhost:5000/friends', friend)
        .then(res => {
            console.log(res);
            dispatch({
                type: ADD_FRIEND_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: ADD_FRIEND_FAILURE,
            payload: err
        }))
}

export const updateFriend = (friend) => dispatch => {
    dispatch({ type: UPDATE_FRIEND_START });
    axios
        .put(`http://localhost:5000/friends/${friend.id}`, friend)
        .then(res => {
            console.log(res);
            dispatch({
                type: UPDATE_FRIEND_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: UPDATE_FRIEND_FAILURE,
            payload: err
        }))
}

export const deleteFriend = friend => dispatch => {
    dispatch({ type: DELETE_FRIEND_START })
    axios
        .delete(`http://localhost:5000/friends/${friend.id}`)
        .then(res => {
            console.log(res);
            dispatch({
                type: DELETE_FRIEND_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: DELETE_FRIEND_ERROR,
            payload: err
        }))
}