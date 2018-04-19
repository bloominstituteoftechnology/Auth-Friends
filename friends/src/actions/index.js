import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const fetchFriends = friends => {
  const promise = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(({ data }) => {
        dispatch({ type: FETCHED, payload: data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};
