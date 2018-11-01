import axios from "axios";
import { resolve } from "path";

export const FETCH = "FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD = "ADD";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
// export const UPDATE = "UPDATE";
// export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
// export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH });
    axios
        .get("http://localhost:5000/api/friends")
        .then(resolve => {
          dispatch({ type: FETCH_SUCCESS, payload: resolve.data})
        })
        .catch(error => {
          dispatch({ type: FETCH_FAILURE, payload: error })
        });


};
export const addFriend = friend => dispatch => {
    dispatch({ type: ADD });
    axios
      .post("http://localhost:5000/api/friends", friend)
      .then(res => {
        dispatch({ type: ADD_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_FAILURE, payload: err });
      });
  };

