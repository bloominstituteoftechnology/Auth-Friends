import axios from "axios";


export const FETCHING_FRIEND_START = "FETCHING_FRIEND_START";
export const FETCHING_FRIEND_SUCCESS = "FETCHING_FRIEND_SUCCESS";
export const FETCHING_FRIEND_FAILURE = "FETCHING_FRIEND_FAILURE";

export const addFriend = friend => dispatch => {
    dispatch({ type: FETCHING_FRIEND_START})
    axios
    .post("http://localhost:5000/friends", friend)
    .then(response => {
        console.log(response)
    })
}