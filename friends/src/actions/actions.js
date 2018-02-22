import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: IS_FETCHING });
    friends
      .then(({ data }) => {
        dispatch({ type: FRIENDS_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
      });
  };
};