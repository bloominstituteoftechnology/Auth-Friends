import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS_GET_FRIENDS = 'SUCCESS_GET_FRIENDS';
export const FAILURE = 'FAILURE';

export const getFriends = () => dispatch => {
  console.log(dispatch);
  dispatch({ type: FETCHING_FRIENDS })
    axios
      .get('http://localhost:5000/api/friends/get')
      .then(response => {
        console.log(response);
        dispatch({ 
          type: SUCCESS_GET_FRIENDS, 
          payload: response.data })
      })
      .catch(error => {
        console.log(error);
        dispatch({ 
          type: FAILURE, 
          payload: error 
        })
      })
    }