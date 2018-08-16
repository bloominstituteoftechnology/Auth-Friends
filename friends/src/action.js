import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios.get('http://localhost:5000/api/friends')
    .then(response => {
      console.log(response)
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(response => {
      console.log(response)
      dispatch({ type: FETCH_FAILURE, payload: response });
    });
}