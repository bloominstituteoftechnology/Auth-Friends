import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS });
  axios
    .get('http://localhost:5000/')
    .then(({ data }) => {
      dispatch({
        type: GET_FRIENDS_SUCCESS,
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({
        type: GET_FRIENDS_FAILURE,
        payload: err
      });
    });
};
