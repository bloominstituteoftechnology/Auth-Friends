import axios from 'axios';

export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR'

export const fetchFriends = () => (dispatch) => {
  dispatch({ type: FETCH });
  axios
    .get(`http://localhost:5000/api/friends`)
    .then(response => {
      console.log(response)
      dispatch({ type: SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err});
    });
};
