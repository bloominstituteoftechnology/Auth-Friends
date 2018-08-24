//ACTIONS
import axios from "axios";

export const GETTING_FRIENDS = "GETTING_FRIENDS";
export const GET_FRIENDS = "GET_FRIENDS";
export const CREATING_FRIEND = "CREATING_FRIEND";
export const CREATED_FRIEND = "CREATED_FRIEND";
export const ERROR = "ERROR";

const URL = "http://localhost:5000/api/friends";

export const getFriends = () => {
  const friends = axios.get(`${URL}`);
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

export const createFriends = (newFriend) => {
  const friends = axios.post(`${URL}`, newFriend);
  return dispatch => {
    dispatch({ type: CREATING_FRIEND });
    friends
      .then(res => {
        dispatch({ type: CREATED_FRIEND, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
