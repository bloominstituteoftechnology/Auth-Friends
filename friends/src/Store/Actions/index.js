import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS'
export const FRIENDS_ERROR = 'FRIENDS_ERROR';
export const FRIENDS_ERROR = 'FRIENDS_ERROR';
export const FRIENDS_ERROR = 'FRIENDS_ERROR';

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

export const friendPost = () => {
  return dispatch => {
    dispatch({type: ADD_FRIEND});
  }
}