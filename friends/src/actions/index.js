import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const ERROR = 'ERROR';

const URL = 'http://localhost:5000/api/friends';

export const fetchFriends = () => {
  return dispatch => {
    dispatch({type: FETCHING_FRIENDS});
    axios
      .get('http://localhost:5000/api/friends/')
      .then(response => {
        console.log(response);
        dispatch({type: FETCH_FRIENDS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });   
  };
};