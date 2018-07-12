import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const ADDING = "ADDING";

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

export const savingFriends = () => {
  return dispatch => {
    dispatch({ type: ADDING });
    axios
      .get(URL)
      .then(response => {
        dispath({ type: FETCHED, payload: response.data });
      })
      .catch(ERROR => {
        dispatch({ type: ERROR, payload: ERROR });
      });
  };
};
