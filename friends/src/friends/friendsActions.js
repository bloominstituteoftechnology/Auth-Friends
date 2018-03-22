import axios from 'axios';

export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';

export default () => dispatch => {
  axios.get('http://localhost:5000/api/friends')
  .then(({ data }) => {
    dispatch({ type: FETCH_FRIENDS_SUCCESS, friends: data });
  })
  .catch(err => {
    dispatch({ FETCH_FRIENDS_ERROR });
  })
} 