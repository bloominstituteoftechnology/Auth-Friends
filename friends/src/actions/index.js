import React from "react";
import axios from "axios";

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
