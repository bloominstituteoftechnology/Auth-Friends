import axios from 'axios';

export const FRIENDS_FETCH_SUCCESS = 'FRIENDS_FETCH_SUCCESS';
export const FRIENDS_FETCH_FAILURE = 'FRIENDS_FETCH_FAILURE';
export const FRIENDS_FETCH = 'FRIENDS_FETCH';
export const FRIENDS_FETCH_FINISHED = 'FRIENDS_FETCH_FINISHED';

export const fetchData = () => dispatch => {
  dispatch({ type: FRIENDS_FETCH });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FRIENDS_FETCH_SUCCESS, payload: response.data });
      dispatch({ type: FRIENDS_FETCH_FINISHED });
    })
    .catch(error => {
      dispatch({ type: FRIENDS_FETCH_FAILURE, payload: error });
      dispatch({ type: FRIENDS_FETCH_FINISHED });
    });
};
