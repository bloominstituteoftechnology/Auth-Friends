import axios from 'axios';

export const LOADING = 'LOADING';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const ERROR = 'ERROR';

export const fetchFriends = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FETCHED_FRIENDS, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};
