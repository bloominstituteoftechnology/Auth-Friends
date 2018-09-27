import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const ERROR_FRIENDS = 'ERROR_FRIENDS';
export const FRIEND_ADD = 'FRIEND_ADD';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';

export const friendFetch = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    const promise = axios.get('http://localhost:5000/api/friends/');
    promise
      .then(response => {
        dispatch({ type: FETCHING_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FRIENDS, payload: err });
      });
  };
};

export const friendPost = friend => {
  console.log(friend);
  return dispatch => {
    dispatch({ type: FRIEND_ADD });
    const promise = axios.post('http://localhost:5000/api/friends/', friend);
    promise
      .then(response => dispatch({ type: ADD_SUCCESS, payload: response.data }))
      .catch(err => dispatch({ type: ADD_ERROR, payload: err }));
  };
};
