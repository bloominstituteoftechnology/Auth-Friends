import axios from 'axios';

export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const getFriendsAction = () => dispatch => {
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FETCHED, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching data' });
    });
};

export default getFriendsAction;
