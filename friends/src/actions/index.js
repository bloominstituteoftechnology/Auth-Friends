import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_COMPLETE = "ADD_FRIEND_COMPLETE";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({
        type: FETCHING_FRIENDS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND });
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(response => {
      dispatch({
        type: ADD_FRIEND_COMPLETE,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: ADD_FRIEND_FAILURE, payload: error });
    });
};
