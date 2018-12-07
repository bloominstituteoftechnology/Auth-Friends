import axios from 'axios';

export const FETCH_FRIENDS_REQUEST = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const ADD_FRIENDS_REQUEST = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_REQUEST });
    axios
      .get('http://localhost:5000/api/friends/')
      .then(response => {
        console.log('fetch finished');
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
  };

  export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIENDS_REQUEST });
    axios
      .post('http://localhost:5000/api/friends/', friend)
      .then(response => {
        console.log('fetch finished');
        dispatch({ type: ADD_FRIENDS_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: ADD_FRIENDS_FAILURE, payload: err }));
  };