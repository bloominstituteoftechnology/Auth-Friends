import axios from 'axios';
import * as ActionTypes from './actionTypes';

export const fetchFriends = () => {
 const friends = axios.get('http://localhost:5000/api/friends');
  return dispatch => {
   dispatch({ type: ActionTypes.PENDING_FRIENDS });
    friends
      .then(response => {
     dispatch({
          type: ActionTypes.SUCCESS_FRIENDS,
          payload: response.data
        });
      })
     .catch(err => {
        dispatch({
          type: ActionTypes.ERROR_FRIENDS,
          payload: 'Error fetching friends...'
        });
      });
  };
}; 
