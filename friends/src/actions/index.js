import axios from 'axios';

export const IS_FETCHING = 'IS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';


export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get')
  return dispatch => {
    dispatch({ type: IS_FETCHING })
    friend
      .then((response) => {
        dispatch({ type: FRIENDS_FETCHED, payload: response });
        console.log(response);
      })
      .catch((err) => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
        console.log(err);
      });
  };
};

export const addFriend = (friend) => {
  return {
    type: ADD_FRIEND,
    payload: friend,
  }
};