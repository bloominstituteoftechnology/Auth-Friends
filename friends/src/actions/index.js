import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchData = () => dispatch => {
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => dispatch({ type: FETCH_DATA, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_ERROR, payload: err }));
};
