import axios from "axios";

export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_PENDING = "FETCH_FRIENDS_PENDING";
export const FETCH_FRIENDS_ERROR = "FETCH_FRIENDS_ERROR";

export default () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_PENDING });

  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FRIENDS_ERROR, error: err });
    });
};
