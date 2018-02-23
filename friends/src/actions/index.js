import axios from "axios";
export const GET_FRIENDS = "GET_FRIENDS";
export const GETTING_FRIENDS = "GETTING_FRIENDS";
export const ERROR = "ERROR";

const URL = 'http://localhost:5000/api/friends';

export const getFriends = () => {
  const friends = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({ type: GETTING_FRIENDS });
    friends
      .then(response => {
        dispatch({ type: GET_FRIENDS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
