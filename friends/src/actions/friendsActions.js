import axios from "axios";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_FRIENDS = "GET_FRIENDS";

export const fetchFriends = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get("http://localhost:5000/api/friends")
      .then(response => {
        console.log(response.data)
      dispatch({type: GET_FRIENDS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error loading friends" });
    });
};
