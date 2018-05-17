import axios from 'axios';

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCH_SUCCESS = "FETCHED_FRIENDS";
export const ERROR_FETCHING = "ERROR_FETCHING";

export const fetchFriends = () => {
  const promise = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS }); // pending state
    promise
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR_FETCHING });
      })
  }
} 