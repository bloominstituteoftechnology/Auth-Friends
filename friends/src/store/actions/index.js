import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS",
  FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS",
  FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE",
  GET_FRIEND = "GET_FRIEND",
  ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS",
  ADD_FRIEND = "ADD_FRIEND",
  ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE",
  EDIT_FRIEND = "EDIT_FRIEND",
  DELETE_FRIEND = "DELETE_FRIEND";

const URL = "http://localhost:5000/api/friends/";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(URL)
    .then(({ data }) => {
      console.log("DATA", data);
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: data });
    })
    .catch(err => dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err }));
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND });
  axios
    .post(URL, friend)
    .then(({ data }) => dispatch({ type: ADD_FRIEND_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
};
