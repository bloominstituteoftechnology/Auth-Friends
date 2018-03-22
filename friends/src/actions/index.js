import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  console.log('fetching');

  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FETCHED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching friends' });
    });
};