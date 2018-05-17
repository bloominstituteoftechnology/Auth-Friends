// imports
import axios from 'axios';

// actions types
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';

// action descriptions
// getFriends
export const getFriends = () => {
  return dispatch => {
    return (
      axios.get('http://localhost:5000/api/friends')
        .then(({ data }) => {
          return dispatch({
            type: GET_FRIENDS,
            payload: data
          });
        })
        .catch(err => {
          console.log('ERR', err)
          return dispatch({
            type: ERROR,
            payload: err
          });
        })
    );
  };
};