import axios from 'axios';

import { FETCH_FRIENDS, ADD_FRIEND } from './types';

export const fetchFriends = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/friends');
  dispatch({ type: FETCH_FRIENDS, payload: res.data });
};

export const addFriend = friend => async dispatch => {
  const res = await axios.post('http://localhost:5000/api/friends', friend);
  dispatch({ type: ADD_FRIEND, payload: res.data });
};
