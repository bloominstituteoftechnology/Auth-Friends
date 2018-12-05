import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("/api/friends")
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, paylod: res.friends });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};
