import axios from "axios"

export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_FRIENDS = "ADD_FRIENDS";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const DELETE_FRIENDS = "DELETE_FRIENDS";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const UPDATE_FRIENDS = "UPDATE_FRIENDS";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const ERROR = "ERROR";

export const fetchFriends = () => {
    return dispatch => {
        dispatch({ type: FETCH_FRIENDS });
        axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: "Friends could not load :("
            })
        })
    }
}

export const addFriends = friend => {
    return dispatch => {
        dispatch({type: ADD_FRIENDS});
        axios
        .post('http://localhost:5000/api/friends', friend)
        .then(res => {
            dispatch({
                type: ADD_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: "Friends could not load :("
            })
        })
    }
}

export const deleteFriends = id => {
    return dispatch => {
        dispatch({type: DELETE_FRIENDS});
        axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: "Could not remove friend :("
            })
        })
    }
}

export const updateFriend = (id,friendInfo) => {
    return dispatch => {
        dispatch({ type: UPDATE_FRIENDS });
        axios
        .put(`http://localhost:5000/api/friends/${id}`, friendInfo)
    }
}