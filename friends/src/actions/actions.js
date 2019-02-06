import axios from 'axios';
import {FETCHINGFRIENDS, FETCHEDFRIENDS, ERROR} from './types.js';

export const fetchingFriends = () => {
  return dispatch => {
    dispatch({type: FETCHINGFRIENDS});
    axios
      .get('http://localhost:5000/api/friends')
      .then(res => {
        dispatch({type: FETCHEDFRIENDS, payload: res});
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload:
            'There was a problem retrieving your friends. Please try again',
        });
      });
  };
};
