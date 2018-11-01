import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => dispatch => {
  console.log(dispatch);
  dispatch({ type: FETCHING_FRIENDS })
    axios
      .get('http://localhost:5000/api/friends/get')
      .then(response => {
        console.log(response);
        dispatch({ 
          type: GET_FRIENDS, 
          payload: response.data })
      })
      .catch(error => {
        console.log(error);
        dispatch({ 
          type: ERROR, 
          payload: error 
        })
      })
    }