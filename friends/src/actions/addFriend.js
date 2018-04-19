import axios from 'axios';
import * as Types from './actionTypes';

export const addFriend = data => {
  const avengers = axios.post('http://localhost:5000/api/friends', data);
  return dispatch => {
    dispatch({ type: Types.PENDING });
    avengers
      .then(response => {
        dispatch({
          type: Types.SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: Types.ERROR,
          payload: 'ERROR Adding Friend'
        });
      });
  };
};
