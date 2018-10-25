import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCH_SUCCESS = "FRIENDS_FETCH_SUCCESS";
export const FRIENDS_FETCH_FAILURE = "FRIENDS_FETCH_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";
export const EDIT_FRIEND = "EDIT_FRIEND";

let nextTodoId = 6

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => {
            console.log(response);
            dispatch({ type: FRIENDS_FETCH_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FRIENDS_FETCH_FAILURE, payload: error });
        });
    };

export const addFriend = (name, age, email) => {
    return {
        type: ADD_FRIEND,
        id: nextTodoId++,
        name: name,
        age: age,
        email: email
    };
};

export const editFriend = friendInput => ({ type: EDIT_FRIEND, payload: friendInput });