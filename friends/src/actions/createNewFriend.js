import axios from 'axios';
export const IS_SAVING = 'IS_SAVING';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const ERROR_SAVING_FRIENDS = 'ERROR_SAVING_FRIENDS';

export const createNewFriend = (newFriendObj) => {
  const friends = axios.post('http://localhost:5000/api/friends/create', newFriendObj );
  return dispatch => {
    dispatch({ type: IS_SAVING });
    friends
      .then(({ data }) => {
        dispatch({ type: FRIENDS_SAVED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_SAVING_FRIENDS, payload: err });
      });
  };
};