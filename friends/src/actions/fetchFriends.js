import axios from 'axios';
import * as FriendTypes from './actionTypes';

export const fetchFriends = () => {
  const friends = axios.get(`http://localhost:5000/api/friends`);
  return dispatch => {
    dispatch({ type: FriendTypes.PENDING_FRIENDS });
    friends
      .then(res => {
        dispatch({ 
            type: FriendTypes.SUCCESS_FRIENDS,
            payload: res.data 
        });
      })
      .catch(err => {
        dispatch({ 
            type: FriendTypes.ERROR_FRIENDS, 
            payload: err 
        });
      });
  };
};