import axios from 'axios';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const ERROR_ADDING_FRIEND = 'ERROR_ADDING_FRIEND';

export const addFriend = (friendInfo) => {
  return dispatch => {
    dispatch({ type: ADDING_FRIEND });
    axios.push('http://localhost:5000/api/friends/create', friendInfo)
      .then(response => {
        dispatch({ type: FRIEND_ADDED, payload: response.friends });
      })
      .catch(error => {
        dispatch({ type: ERROR_ADDING_FRIEND, payload: error});
      });
  };
};