import axios from "axios";
const URL = "http://localhost:5000/api/friends";

export const FETCHING = "FETCHING_FRIENDS";
export const SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const ERROR = "FETCHING_ERROR";

export const getFriendsData = () => {
  console.log("action called!!!!!");
  return dispatch => {
    console.log("action called!!!!!");
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response => dispatch({ type: SUCCESS, payload: response.data }))
      .catch(err => dispatch({ type: ERROR }));
  };
};
