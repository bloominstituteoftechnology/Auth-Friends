import axios from "axios";

export const ERROR = "ERROR";
export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';

const URL = "http://localhost:500/api/friends";

export const fetchingFriends = () => {
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


export const friendsSaved = () => {};

export const friendsSaving = () => {};

export const updatingFriend = () => {};

export const updatedFriend = () => {};

export const deletingFriend = () => {};

export const deletedFriend = () => {};
