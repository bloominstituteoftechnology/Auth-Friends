import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const ADD_FRIEND = "ADD_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";

export const fetchFriends = () => {
    return function(dispatch) {
        dispatch({ type: FETCHING });
        axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => {
            dispatch({ type: FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
   }
}

  export const addNewFriend = (name, age, email) => {
    return function(dispatch) {
        dispatch({ type: ADD_FRIEND });
        axios
       .post(`http://localhost:5000/api/friends`, {
        name: name,
        age: age,
        email: email
        })
        .then(response => {
            console.log(response.data);
            dispatch({ type: FRIEND_ADDED, payload: response.data[response.data.length - 1] });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
   }
}