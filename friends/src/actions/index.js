import React from "react";
import axios from "axios";
import { bindActionCreators } from "redux";

export const FETCH_FRIEND = "FETCH_FRIEND";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_FRIEND = "ADD_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const getData = _ => dispatch => {
  dispatch({ type: FETCH_FRIEND });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAIL, payload: err }));
};

export const addFriend = friend => dispatch => {
  console.log("friend", friend);
  axios
    .post("http://localhost:5000/api/friends", friend)
    .then(res => dispatch({ type: ADD_FRIEND, payload: res.data }))
    .catch(err => console.log(err));
};

export const deleteFriend = id => dispatch => {
  console.log("delete", id);
  return axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({ type: DELETE_FRIEND, payload: res.data }));
};
