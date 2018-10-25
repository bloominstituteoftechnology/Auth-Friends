import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

const URL = "http://localhost:5000/api/Friends";

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(ERROR => {
        dispatch({ type: ERROR, payload: ERROR });
      });
  };
};
