import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILED = "FETCHING_FAILED";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILED = "ADD_FAILED";

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
        .get('http://localhost:5000/api/friends')
        .then(friends => {
            dispatch({ type: FETCHING_SUCCESS, payload: friends.data })
        })
        .catch(error => {
            dispatch({ type: FETCHING_FAILED, payload: "Failed fetching friends", error})
        })
}

export const addFriends = () => dispatch => {
    dispatch({ type: ADD_FRIEND });
    axios
        .post("http://localhost:5000/api/friends/")
        .then(friends => {
            console.log("inside add friends", friends.data)
            dispatch({ type: ADD_SUCCESS, payload: [...friends.data]})
        })
        .catch(error => {
            dispatch({ type: ADD_FAILED, payload: "Failed adding friend", error})
        })

}