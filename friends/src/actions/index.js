import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchData = () => dispatch => {
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: 'FAILURE', payload: error });
    });
};