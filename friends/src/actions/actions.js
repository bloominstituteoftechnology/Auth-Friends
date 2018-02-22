import axios from 'axios';

export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';
export const ERROR_GETTING_FRIENDS = 'ERROR_GETTING_FRIENDS';

export const CREATE_FRIEND = 'CREATE_FRIEND';
export const FRIEND_CREATED = 'FRIEND_CREATED';
export const ERROR_CREATING_FRIEND = 'ERROR_CREATING_FRIEND';

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR_DELETING_FRIEND = 'ERROR_DELETING_FRIEND';

export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const ERROR_UPDATING_FRIEND = 'ERROR_UPDATING_FRIEND';

export const getFriends = () => {
  return dispatch => {
    dispatch({ type: GETTING_FRIENDS });
    axios
      .get('http://localhost:5000/api/friends/get')
      .then(({ data }) => dispatch({ type: FRIENDS_RECEIVED, payload: data }))
      .catch(error => {
        dispatch({ type: ERROR_GETTING_FRIENDS, payload: error });
      });
  };
};

export const createFriend = () => {
  return dispatch => {
    dispatch({ type: CREATE_FRIEND });
    axios
      .post('http://localhost:5000/api/friends/create')
      .then(({ data }) => {
        dispatch({ type: FRIEND_CREATED, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR_CREATING_FRIEND, payload: error });
      });
  };
};

export const deleteFriend = () => {
  return dispatch => {
    dispatch({ type: DELETE_FRIEND });
    axios
      .delete(`http://localhost:5000/api/friends/delete`)
      .then(({ data }) => dispatch({ type: FRIEND_DELETED, payload: data }))
      .catch(error => {
        dispatch({ type: ERROR_DELETING_FRIEND, payload: error });
      });
  };
};

export const updateFriend = () => {
  return dispatch => {
    dispatch({ type: UPDATE_FRIEND });
    axios
      .put(`http://localhost:5000/api/friends/update`)
      .then(({ data }) => {
        dispatch({ type: FRIEND_UPDATED, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR_UPDATING_FRIEND, payload: error });
      });
  };
};

/* `**[GET]** /api/friends/get`
* `**[POST]** /api/friends/create`
* `**[UPDATE]** /api/friends/update`
* `**[DELETE]** /api/friends/delete` */
