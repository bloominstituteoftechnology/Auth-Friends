import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const ON_DATA_FETCHED = 'ON_DATA_FETCHED';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ON_FRIEND_ADDED = 'ON_FRIEND_ADDED';
export const ON_DATA_ERROR = 'ON_DATA_ERROR';
export const CHANGE_FRIEND_DATA = 'CHANGE_FRIEND_DATA';

export const getAllFriends = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING_DATA });
    axios.get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: ON_DATA_FETCHED, payload: response.data });
    })
    .catch(e => dispatch({ type: ON_DATA_ERROR, payload: e }));
  };
};

export const addFriend = (friend) => {
  return function(dispatch) {
    dispatch({ type: ADDING_FRIEND });
    axios.post('http://localhost:5000/api/friends', friend)
    .then(response => {
      dispatch({ type: ON_FRIEND_ADDED, payload: response.data });
    })
    .catch(e => dispatch({ type: ON_DATA_ERROR, payload: e }));
  };
};

export const changeFriendData = (friend) => {
  return {
    type: CHANGE_FRIEND_DATA,
    payload: friend
  }
};