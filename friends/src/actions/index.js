import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';
export const ERROR = 'ERROR'; 

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
      .get('http://localhost:5000/api/friends/')
      .then(response => {
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const saveFriend = friend => {
  return dispatch => {
    dispatch({ type: SAVING_FRIEND });
    axios
      .post('http://localhost:5000/api/friends/', friend)
      .then(response => {
        dispatch({ type: FRIEND_SAVED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};