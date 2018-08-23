import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHED = "FETCHED";
export const ERROR_FETCHING = "ERROR_FETCHING";
export const POSTING_FRIEND = "POSTING_FRIEND";
export const POSTED = "POSTED";
export const ERROR_POSTING = "ERROR_POSTING";

export const getTheData = () => {
  const friends = axios.get("http://localhost:5000/friends");
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
      .then(response => {
        console.log(response);
        dispatch({ type: FETCHED, payload: [] });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: "Error fetching friends" });
      });
  };
};
