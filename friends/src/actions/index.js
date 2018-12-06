import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIEND_FETCH_SUCCESS = 'FRIEND_FETCH_SUCCESS';
export const FRIEND_FETCH_FAILURE = 'FRIEND_FETCH_FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';
export const FRIEND_SELECTED = 'SELECTING_FRIEND';
export const EDITING_FRIEND = 'EDITING_FRIEND';
export const EDIT_FRIEND_SUCCESS = 'EDIT_FRIEND_SUCCESS';
export const EDIT_FRIEND_FAILURE = 'EDIT_FRIEND_FAILURE';
export const CLEAR_SELECTED = 'CLEAR_SELECTED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const DELETE_SUCCESSFUL = 'DELETE_SUCCESSFUL';
export const DELETE_FAILURE = 'DELETE_FAILURE';

const url = 'http://localhost:5000';

export const fetchFriends = () => dispatch => {
  dispatch({type: FETCHING_FRIENDS});
  axios
    .get(`${url}/api/friends/`)
    .then(res => {
      console.log(res);
      dispatch({type: FRIEND_FETCH_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FRIEND_FETCH_FAILURE});
    });
};

export const addFriend = friend => dispatch => {
  dispatch({type: ADDING_FRIEND});
  axios
    .post(`${url}/api/friends`, friend)
    .then(res => {
      console.log('in then', res.data);
      dispatch({type: ADD_FRIEND_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log();
      dispatch({type: ADD_FRIEND_FAILURE, payload: err});
    });
};

export const editFriend = friend => dispatch => {
  dispatch({type: EDITING_FRIEND, payload: friend});
  axios
    .put(`${url}/api/friends/${friend.id}`, friend)
    .then(res => {
      console.log('in then', res.data);
      dispatch({type: EDIT_FRIEND_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: EDIT_FRIEND_FAILURE, payload: err});
    });
};

export const selectFriend = id => dispatch => {
  dispatch({type: FRIEND_SELECTED, payload: id});
};

export const clearSelected = () => dispatch => {
  dispatch({type: CLEAR_SELECTED});
};

export const deleteSelected = id => dispatch => {
  dispatch({type: DELETING_FRIEND});
  axios
    .delete(`${url}/api/friends/${id}`)
    .then(res => {
      console.log(res);
      dispatch({type: DELETE_SUCCESSFUL, payload: res.data});
    })
    .catch(err => {
      dispatch({type: DELETE_FAILURE, payload: err});
    });
};
