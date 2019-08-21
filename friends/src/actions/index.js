import axios from "axios";
import axioswithAuth from "../utils/axiosWithAuth";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: FETCH_DATA_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err });
    });
};

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axioswithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
};
