import axios from 'axios';

export const FRIENDS_REQUEST = 'FRIENDS_REQUEST';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

export const FRIEND_REQUEST = 'FRIEND_REQUEST';
export const FRIEND_SUCCESS = 'FRIEND_SUCCESS';
export const FRIEND_FAILURE = 'FRIEND_FAILURE';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const UPDATE_REQUEST = 'UPDATE_REQUEST';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

const BASE_URL = `http://localhost:5000`;

export const fetchFriends = () => dispatch => {
  dispatch({ type: FRIENDS_REQUEST });

  axios
    .get(BASE_URL + '/api/friends')
    .then( res => {
      dispatch({ type: FRIENDS_SUCCESS, payload: res.data})
    })
    .catch( err => {
      dispatch({ type: FRIENDS_FAILURE, payload: err })
    })
}

export const fetchFriend = (id) => dispatch => {
  dispatch({ type: FRIEND_REQUEST });

  axios
  .get(BASE_URL + `/api/friends/${id}`)
  .then( res => {
    dispatch({ type: FRIEND_SUCCESS, payload: res.data})
  })
  .catch( err => {
    dispatch({ type: FRIEND_FAILURE, payload: err })
  })
}

export const addFriend = (friend) => dispatch => {
  dispatch({ type: ADD_REQUEST });

  axios
  .post(BASE_URL + '/api/friends', friend)
  .then( res => {
    dispatch({ type: ADD_SUCCESS, payload: res.data})
  })
  .catch( err => {
    dispatch({ type: ADD_FAILURE, payload: err })
  })
}

export const updateFriend = (friend, id) => dispatch => {
  dispatch({ type: UPDATE_REQUEST });

  axios
  .put(BASE_URL + `/api/friends/${id}`, friend)
  .then( res => {
    dispatch({ type: UPDATE_SUCCESS, payload: res.data})
  })
  .catch( err => {
    dispatch({ type: UPDATE_FAILURE, payload: err })
  })
}

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_REQUEST });

  axios
  .delete(BASE_URL + `/api/friends/${id}`)
  .then( res => {
    dispatch({ type: DELETE_SUCCESS, payload: res.data})
  })
  .catch( err => {
    dispatch({ type: DELETE_FAILURE, payload: err })
  })
}