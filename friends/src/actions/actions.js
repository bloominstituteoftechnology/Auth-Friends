import axios from "axios";

export const ERROR = "ERROR";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";

const URL = "http://localhost:5000/api/friends";

export const fetchFriends = () => {
  const friends = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
      .then(response => {
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addFriend = friend => {
  const newFriend = axios.post(`${URL}/create`, friend);
  return dispatch => {
    dispatch({ type: ADDING_FRIEND });
    newFriend
      .then(response => {
        dispatch({ type: FRIEND_ADDED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const updatingFriend = () => {};

export const updatedFriend = () => {};

export const deletingFriend = () => {};

export const deletedFriend = () => {};
