import axios from 'axios';
export const IS_DELETING = 'IS_DELETING';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR_DELETING_FRIEND = 'ERROR_DELETING_FRIEND';

export const deleteFriend = (id) => {
  const friends = axios.delete('http://localhost:5000/api/friends/delete', id);
  return dispatch => {
    dispatch({ type: IS_DELETING });
    friends
      .then(({ data }) => {
        dispatch({ type: FRIEND_DELETED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_DELETING_FRIEND, payload: err });
      });
  };
};