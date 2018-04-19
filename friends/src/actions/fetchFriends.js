import axios from 'axios';
import * as Types from './actionTypes';

export const fetchFriends = () => {
  const avengers = axios.get('http://localhost:5000/api/friends');
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
          payload: 'ERROR Fetching Friends'
        });
      });
  };
};
