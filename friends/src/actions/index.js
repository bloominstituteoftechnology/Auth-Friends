import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS'

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
      .then(response => {
        console.log('response', response);
        console.log('response.data', response.data)
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: error });
      });
  }
}

export const addFriends = (friend) => {
  return {
    type: ADD_FRIENDS,
    payload: friend,
  }
}
export const saveFriends = () => {
  const friends = axios.post('http://localhost:5000/api/friends/create');
  return dispatch => {
    dispatch({ type: SAVING_FRIENDS });
    friends
      .then(response => {
        dispatch({ type: FRIENDS_SAVED})
      })
      .catch(error => {
        dispatch({ type: ERROR_SAVING_FRIENDS, payload: error });
      });
  }
}