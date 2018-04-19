import axios from 'axios';

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCH_NEW_FRIEND = "FETCH_NEW_FRIEND";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ERROR_FETCHING = "ERROR_FETCHING";
export const SAVING_FRIEND = "SAVING_FRIEND";
export const SAVE_SUCCESS = "SAVE_SUCCESS";
export const ERROR_SAVING = "ERROR_SAVING";

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

export const addFriend = data => {
  return dispatch => {
    console.log(data);
    axios.post("http://localhost:5000/api/friends", data)
      .then(response => {
        console.log(response);
        dispatch({ type: FETCH_NEW_FRIEND, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR_SAVING });
      })
  }
}