import axios from 'axios';
 export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const ADD_FRIEND = "ADD_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";
export const EDIT_FRIEND = "EDIT_FRIEND";
export const FRIEND_EDITED = "FRIEND_EDITED";

const url= `http://localhost:5000/api/friends`


export const fetchFriends = () => {
    return function(dispatch) {
        dispatch({ type: FETCHING });
        axios
        .get(url)
        .then(response => {
            dispatch({ type: FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
   }
}

export const addFriend = (name, age, email) => {
    return function(dispatch) {
        dispatch({ type: ADD_FRIEND });
        axios
       .post(`http://localhost:5000/api/friends`, {
        name: name,
        age: age,
        email: email
        })
        .then(response => {
            dispatch({ type: FRIEND_ADDED, payload: response.data[response.data.length - 1] });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
   }
}


export const deleteFriend = id => {
    return function(dispatch) {
        dispatch({ type: DELETE_FRIEND });
        axios
       .delete(url)
        .then(response => {
            dispatch({ type: FRIEND_DELETED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
   }
}
 export const editFriend = (name, age, email, id) => {
    return function(dispatch) {
        dispatch({ type: EDIT_FRIEND });
        axios
        .put(url, {
            name: name,
            age: age,
            email: email
            })
        .then(response => {
            dispatch({ type: FRIEND_EDITED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
   }
}