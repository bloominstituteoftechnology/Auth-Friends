import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

export const loadFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS })
        axios
            .get(`http://localhost:5000/api/friends`)
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })
    }
}

export const addFriend = (newFriend) => {
    return dispatch => {
        axios
            .get(`http://localhost:5000/api/friends`, newFriend)
            .then(response => {
                dispatch({
                    type: ADD_FRIEND,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })
    }
}

export const updateFriend = (id, updatedFriend) => {
    return dispatch => {
        axios
            .get(`http://localhost:5000/api/friends${id}`, updatedFriend)
            .then(response => {
                dispatch({
                    type: UPDATE_FRIEND,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })
    }
}