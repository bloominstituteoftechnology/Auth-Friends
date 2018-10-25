import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIENDS = 'UPDATING_FRIENDS';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    const promise = axios.get('http://localhost:5000/api/friends/');
    promise
      .then(response => {
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addFriend = friend => {
  console.log(friend);
  return dispatch => {
    dispatch({ type: FRIENDS_SAVED });
    const promise = axios.post('http://localhost:5000/api/friends/', friend);
    promise.then(response =>
      dispatch({ type: SAVING_FRIENDS, payload: response.data })
    );
  };
};
