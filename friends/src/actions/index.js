//imports axios
import axios from 'axios';

//exports variables
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

//exports action creators
export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_START });
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
                type: FETCH_FAILURE,
                payload: err
            })
        })
}

export const addFriend = newFriend => dispatch => {
    axios
        .post('http://localhost:5000/api/friends', {
            name: newFriend.nameInput,
            age: newFriend.ageInput,
            email: newFriend.emailInput,
        })
        .then(res => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        })
}

export const editFriend = (editedFriend, id) => dispatch => {
    axios
        .put(`http://localhost:5000/api/friends/${id}`, {
            name: editedFriend.nameInput,
            age: editedFriend.ageInput,
            email: editedFriend.emailInput,
        })
        .then(res => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        })
}

export const deleteFriend = id => dispatch => {
    axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_FAILURE,
                payload: err
            })
        })
}