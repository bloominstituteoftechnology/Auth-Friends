import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000');
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
    .then(({ response }) => {
      console.log(response);
      dispatch({ type: FRIENDS_FETCHED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
    });
  };
};