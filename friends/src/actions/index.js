import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const fetchFriends = () => dispatch => {
  console.log('inside fetchFriends');
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get('http://localhost:5000')
    .then(response => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error })
    });
};