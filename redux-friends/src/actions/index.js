import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export const ADD_NEW_FRIEND_FAILURE = 'ADD_NEW_FRIEND_FAILURE';

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

export const addNewFriend = friend => dispatch => {
  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(res => {
      dispatch({ type: ADD_NEW_FRIEND, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_NEW_FRIEND_FAILURE, payload: err });
    });
};
