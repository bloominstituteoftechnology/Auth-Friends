import axios from 'axios';

import { ERROR_FRIENDS } from './actionTypes';
import { fetchFriends } from './fetchFriends';

export const updateFriend = (id, data) => {
  const friend = axios.put(`http://localhost:5000/api/friends/${id}`, data);
  return dispatch => {
    friend
      .then(res => {
        dispatch(fetchFriends());
      })
      .catch(err => {
        dispatch({ type: ERROR_FRIENDS, payload: err });
      });
  };
};
