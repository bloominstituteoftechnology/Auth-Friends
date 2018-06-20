import axios from 'axios';
export const FRIENDS_FETCHING = 'FRIENDS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVING = 'FRIENDS_SAVING';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const ERROR_SAVING = 'ERROR_SAVING';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const FRIEND_DELETING = 'FRIEND_DELETING';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR_DELETING = 'ERROR_DELETING';

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: FRIENDS_FETCHING });
    friends
      .then(({ data }) => {
        dispatch({ type: FRIENDS_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: err });
      });
  };
};

export const addFriend = data => {
  const monkey = axios.post('http://localhost:5000/api/friends/create', data);
  return dispatch => {
    dispatch({ type: FRIENDS_SAVING });
    monkey
      .then(({ data }) => {
        dispatch({ type: FRIENDS_SAVED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_SAVING, payload: err });
      });
  };
};

export const deleteFriend = index => {
  const monkey = axios.delete('http://localhost:5000/api/friends/delete', {
    data: { index },
  });
  return dispatch => {
    dispatch({ type: FRIEND_DELETING });
    monkey
      .then(({ data }) => {
        dispatch({ type: FRIEND_DELETED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_DELETING, payload: err });
      });
  };
};
