import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS'
export const FRIENDS_ERROR = 'FRIENDS_ERROR';
export const ADD_FRIEND = 'ADD_FRIEND';
export const SUCCESS_ADD = 'SUCCESS_ADD';
export const ERROR_ADD = 'ERROR_ADD';

export const friendFetch = () => {
  return dispatch => {
    dispatch({ type: FETCH_FRIENDS });
    const promise = axios.get('http://localhost:5000/api/friends/')
    promise
      .then(response => {
        dispatch({type: FRIENDS_SUCCESS, payload: response.data})
      })
      .catch(err => {
        dispatch({type: FRIENDS_ERROR, payload: err})
      })
  }
}

export const friendPost = friend => {
  console.log(friend)
  return dispatch => {
    dispatch({type: ADD_FRIEND});
    const promise = axios.post('http://localhost:5000/api/friends/', friend);
    promise
      .then(response => dispatch({type: SUCCESS_ADD, payload: response.data}))
      .catch(err => dispatch({type: ERROR_ADD, payload: err}))
  }
}