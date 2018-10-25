import axios from "axios";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";
export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchFriendsList = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get("http://localhost:5000/api/friends")
        .then(response => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: FETCH_ERROR, payload: error });
        });
};

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND });
    axios
        .post("http://localhost:5000/api/friends", friend)
        .then(response => {
            dispatch({ type: ADD_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ADD_ERROR, payload: error })
        })
};