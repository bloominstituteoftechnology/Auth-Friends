import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';


const url = 'http://localhost:5000/api';


export const fetchFriends = () => {
  const fetchPromise = axios.get(`${url}/friends`);
  return dispatch => {
    dispatch({type: FETCH_START});
    fetchPromise
      .then(
        (response) => {
          dispatch({type: FETCH_SUCCESS, payload: response.data});
        }
      )
      .catch(
        (err) => {
          console.log(err);
          dispatch({type: FETCH_ERROR});
        }
      );
  };
};