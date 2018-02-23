import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
export const CREATING_FRIEND = 'CREATING_FRIEND'
export const FRIEND_CREATED = 'FRIEND_CREATED'
export const ERROR_CREATING_FRIEND = 'ERROR_CREATING_FRIEND'

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    friends
    .then(({ data }) => {
      console.log('The response from the server was: ', data);
      dispatch({ type: FRIENDS_FETCHED, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
    });
  };
};

export const postFriend = () => {
  const friends = axios.get('http://localhost:5000/api/friends/create');
  return dispatch => {
    dispatch({ type: CREATING_FRIEND });
    friends
    .then(({ data }) => {
      console.log('The response from the server was: ', data);
      dispatch({ type: FRIEND_CREATED, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR_CREATING_FRIEND, payload: err });
    });
  };
};