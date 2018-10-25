import axios from 'axios';

import { FETCH_FRIENDS } from './types';

export const fetchFriends = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/friends');
  dispatch({ type: FETCH_FRIENDS, payload: res.data });
};

