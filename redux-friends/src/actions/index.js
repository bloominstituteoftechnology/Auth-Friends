import axios from 'axios';

// GET ACTIONS
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const FETCH_FRIEND = 'FETCH_FRIEND';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';

// POST FRIEND ACTIONS
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export const ADD_NEW_FRIEND_SUCCESS = 'ADD_NEW_FRIEND_SUCCESS';
export const ADD_NEW_FRIEND_FAILURE = 'ADD_NEW_FRIEND_FAILURE';

// UPDATE FRIEND ACTIONS
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';

// DELETE FRIEND ACTIONS
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

// GET request
export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: err });
    });
};

// POST request
export const addNewFriend = friend => dispatch => {
  dispatch({ type: ADD_NEW_FRIEND });
  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(res => {
      dispatch({ type: ADD_NEW_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_NEW_FRIEND_FAILURE, payload: err });
    });
};

// GET single friend to update
export const fetchFriend = id => dispatch => {
  dispatch({ type: FETCH_FRIEND });
  axios
    .get(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: FETCH_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FRIEND_FAILURE, payload: err });
    });
};

// UPDATE request
export const updateFriend = friend => dispatch => {
  dispatch({ type: UPDATE_FRIEND });
  axios
    .put(`http://localhost:5000/api/friends/${friend.id}`, friend)
    .then(res => {
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err });
    });
};

// DELETE request
export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => {
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: err });
    });
};
