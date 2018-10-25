import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCH_SUCCESS = "FRIENDS_FETCH_SUCCESS";
export const FRIENDS_FETCH_FAILURE = "FRIENDS_FETCH_FAILURE";

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