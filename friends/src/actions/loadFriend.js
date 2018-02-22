import axios from 'axios';
export const IS_LOADING_FRIENDS = 'IS_LOADING_FRIENDS';
export const FRIENDS_LOADED = 'FRIENDS_LOADED';
export const ERROR_LOADING_FRIENDS = 'ERROR_LOADING_FRIENDS';

export const loadFriends = () => {
  return dispatch => {
    dispatch({ type: IS_LOADING_FRIENDS });
    axios.get('http://localhost:5000/api/friends/get')
      .then(response => {
        dispatch({ type: FRIENDS_LOADED, payload: response.friends });
      })
      .catch(error => {
        dispatch({ type: ERROR_LOADING_FRIENDS, payload: error });
      });
  };
};