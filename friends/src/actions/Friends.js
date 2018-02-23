import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const A_FRIEND = 'A_FRIEND';

export const getFriends = () => {
  const friends = axios.get('http://localhost:5000/api/friends/get');
  return dispatch => {
    dispatch({ type: IS_FETCHING });
    friends
      .then(response => {
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
      });
  };
};

export const deleteFriend = id => {
  const deleteFriend = axios.delete('http://localhost:5000/api//delete', {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: DELETE_FRIEND });
    deleteFriend
      .then(({ data }) => {
        dispatch({ type: DELETE_FRIEND, payload: data });
        dispatch({ type: A_FRIEND, payload: {} });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payload: err });
      });
  };
};
