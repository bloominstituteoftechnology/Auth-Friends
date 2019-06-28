import axios from 'axios';

const url = 'http://localhost:5000/api/friends';

// Getting friends
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(url)
    .then(({ data }) => dispatch(
      {
        type: FETCHING_FRIENDS_SUCCESS,
        payload: data
      }
    ))
    .catch(err => dispatch(
      {
        type: FETCHING_FRIENDS_FAILURE,
        payload: err
      }
    ));
};

// Create new friend
export const CREATING_FRIEND = 'CREATING_FRIEND';
export const CREATING_FRIEND_SUCCESS = 'CREATING_FRIEND_SUCCESS';
export const CREATING_FRIEND_FAILURE = 'CREATING_FRIEND_FAILURE';

export const addFriend = friend => dispatch => {
  dispatch({ type: CREATING_FRIEND });
  axios
    .post(url, friend)
    .then(({ data }) => dispatch(
      {
        type: CREATING_FRIEND_SUCCESS,
        payload: data
      }
    ))
    .catch(({ data }) => dispatch(
      {
        type: CREATING_FRIEND_FAILURE,
        payload: data
      }
    ))
};