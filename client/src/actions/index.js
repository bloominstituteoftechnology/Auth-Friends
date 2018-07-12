import axios from 'axios';

import {
  MAKING_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
  FETCH_FRIENDS,
  FETCH_SINGLE_FRIEND,
  ERROR,
  CREATE_FRIEND,
  DELETE_FRIEND,
  UPDATE_FRIEND
} from './types';

export const fetchFriends = () => {
  const request = axios.get('http://localhost:5000/api/friends/');

  return dispatch => {
    console.log('making request');
    dispatch({ type: MAKING_REQUEST });
    request
      .then(response => {
        dispatch({
          type: FETCH_FRIENDS,
          payload: response.data
        });
        dispatch({
          type: REQUEST_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err.msg
        });
        dispatch({
          type: REQUEST_FAILED
        });
      });
  };
};

export const fetchSingleFriend = id => {
  const request = axios.get(`http://localhost:5000/api/friends/${id}`);
  return dispatch => {
    dispatch({ type: MAKING_REQUEST });
    request
      .then(res => {
        dispatch({ type: REQUEST_SUCCESS });
        dispatch({
          type: FETCH_SINGLE_FRIEND,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: REQUEST_FAILED });
        dispatch({
          type: ERROR,
          payload: err.msg
        });
      });
  };
};

export const updateFriend = (id, friend) => {
  const request = axios.put(`http://localhost:5000/api/friends/${id}`, friend);
  return dispatch => {
    dispatch({ type: MAKING_REQUEST });
    request
      .then(res => {
        dispatch({ type: UPDATE_FRIEND, payload: res.data });
        dispatch({ type: REQUEST_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.msg });
        dispatch({ type: REQUEST_FAILED });
      });
  };
};

export const createFriend = friend => {
  const request = axios.post('http://localhost:5000/api/friends', friend);
  return dispatch => {
    dispatch({ type: MAKING_REQUEST });
    request
      .then(res => {
        dispatch({ type: CREATE_FRIEND, payload: res.data });
        dispatch({ type: REQUEST_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.msg });
        dispatch({ type: REQUEST_FAILED });
      });
  };
};

export const deleteFriend = id => {
  const request = axios.delete(`http://localhost:5000/api/friends/${id}`);
  return dispatch => {
    dispatch({ type: MAKING_REQUEST });
    request
      .then(res => {
        dispatch({ type: DELETE_FRIEND, payload: res.data });
        dispatch({ type: REQUEST_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.msg });
        dispatch({ type: REQUEST_FAILED });
      });
  };
};
