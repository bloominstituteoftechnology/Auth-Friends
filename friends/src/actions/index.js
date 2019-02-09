import axios from 'axios';

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const LOADING = "LOADING";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const EDITING = "EDITING";
export const EDITED = "EDITED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const EDITFORM = "EDITFORM";



export function fetchFriends() {
    return dispatch => {
        dispatch({ type: LOADING })
        axios
            .get('http://localhost:5000/api/friends')
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
}

export function addFriend(friend) {

    const newFriend = {
        name: friend.name,
        age: friend.age,
        email: friend.email
    }
    return dispatch => {
        dispatch({ type: ADDING })
        axios
            .post(`http://localhost:5000/api/friends`, newFriend)
            .then(response => {
                dispatch({
                    type: ADDED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
}

export function deleteFriend(id) {
    return dispatch => {
        dispatch({ type: DELETING })
        axios
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(response => {
                dispatch({
                    type: DELETED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
}

export function editForm(friend) {
    return dispatch => {
        // console.log(id);
        dispatch({ type: EDITFORM, payload: friend })
    }
}
export function editFriend(id, friend) {
    return dispatch => {
        dispatch({ type: EDITING})
        axios
            .put(`http://localhost:5000/api/friends/${id}`, friend)
            .then(response => {
                dispatch({
                    type: EDITED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
    
}