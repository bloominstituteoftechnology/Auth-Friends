import axios from "axios";

export const FETCH_FRIEND = "FETCH_FRIEND";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const ADD_FRIEND = "ADD_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const FETCHING = "FETCHING";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({ type: FETCHED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error fetching the data" });
    });
};
