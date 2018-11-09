import axios from "axios";

export const FETCHED_FRIENDS = "FETCHED_FRIENDS";
export const ERROR = "ERROR";
export const LOADING_FRIENDS = "LOADING_FRIENDS";

export const fetchingFriends = () => {
  return dispatch => {
    dispatch({ type: LOADING_FRIENDS });
    axios
      .get(`http://localhost:5000/api/friends`)
      .then(response => {
        dispatch({ type: FETCHED_FRIENDS, payload: response });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: `Your friends are hiding because you suck ${err}`
        });
      });
  };
};
