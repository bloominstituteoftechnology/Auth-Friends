import axios from 'axios';
export const SUCCESS = "SUCCESS";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const getFriends = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:5000/api/friends')
      .then (response => {
        dispatch({type: SUCCESS, friends: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, error: "Failed to retrieve friends from server, ruh-roh..."})
      })
  }
}