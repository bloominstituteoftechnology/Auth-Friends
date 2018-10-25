import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILED = "FETCHING_FRIENDS_FAILED";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILED = "ADD_FRIEND_FAILED";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios.get("http://localhost:5000/api/friends").then(res => {
    dispatch({
      type: FETCHING_FRIENDS_SUCCESS,
      payload: res.data
    });
  });
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND });
  axios.post("http://localhost:5000/api/friends", friend).then(res => {
    console.log(res.data);
    console.log(friend);
    dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
  });
};
