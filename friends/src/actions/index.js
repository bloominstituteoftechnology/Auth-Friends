import axios from "axios";

export const RETRIEVING_FRIENDS = "RETRIEVING_FRIENDS";
export const SUCCESS_FRIENDS = "SUCCESS_FRIENDS";
export const ERROR_FRIENDS = "ERROR_FRIENDS";

export const getData = () => {
  const friends = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: RETRIEVING_FRIENDS });
    friends
      .then(response => {
        dispatch({ type: SUCCESS_FRIENDS, payload: [] });
      })
      .catch(err => {
        dispatch({ type: ERROR_FRIENDS, payload: "Error fetching friends" });
      });
  };
};

export const postData = data => {
  const friends = axios.get("http://localhost:5000/api/friends", data);
  return dispatch => {
    dispatch({ type: RETRIEVING_FRIENDS });
    friends
      .then(response => {
        dispatch({ type: SUCCESS_FRIENDS, payload: [] });
      })
      .catch(err => {
        dispatch({ type: ERROR_FRIENDS, payload: "Error with posting" });
      });
  };
};
