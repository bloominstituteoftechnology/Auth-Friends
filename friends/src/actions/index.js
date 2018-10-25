import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS"
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS"
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE"
export const SAVING_FRIENDS = "SAVING_FRIENDS"
export const SAVING_FRIENDS_SUCCESS = "SAVING_FRIENDS_SUCCESS"

export const fetchFriends = () => dispatch => {
    dispatch({type: FETCHING_FRIENDS});
    axios
        .get("http://localhost:5000/api/friends")
        .then(response => {
            dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: response.data});
        })
        .catch(error => {
            dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error});
        })
}

export const addFriend = (friend) => dispatch => {
    dispatch({type: SAVING_FRIENDS});
    axios
        .post(`http://localhost:5000/api/friends/`, friend)
        .then(res => {
            dispatch({type: SAVING_FRIENDS_SUCCESS, payload: res.data});
        })
        .catch(error => {
            dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error});
        })
}

export const deleteFriend = (id) => dispatch => {
    dispatch({type: SAVING_FRIENDS});
    console.log(id);
    axios
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
            dispatch({type: SAVING_FRIENDS_SUCCESS, payload: res.data});
        })
        .catch(error => {
            dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error});
        })
}