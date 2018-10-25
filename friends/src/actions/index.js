import axios from "axios";

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
}