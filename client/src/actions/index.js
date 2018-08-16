import { createActions } from 'redux-actions';
import axios from 'axios';

const URL = '/api/friends';

export const {
  fetchFriendsRequest,
  fetchFriendsFailure,
  fetchFriendsSuccess,
  addFriendRequest,
  addFriendFailure,
  addFriendSuccess,
  updateFriendsRequest,
  updateFriendsFailure,
  updateFriendsSuccess,
  deleteFriendsRequest,
  deleteFriendsFailure,
  deleteFriendsSuccess,
} = createActions(
  'FETCH_FRIENDS_REQUEST',
  'FETCH_FRIENDS_FAILURE',
  'FETCH_FRIENDS_SUCCESS',
  'ADD_FRIEND_REQUEST',
  'ADD_FRIEND_FAILURE',
  'ADD_FRIEND_SUCCESS',
  'UPDATE_FRIENDS_REQUEST',
  'UPDATE_FRIENDS_FAILURE',
  'UPDATE_FRIENDS_SUCCESS',
  'DELETE_FRIENDS_REQUEST',
  'DELETE_FRIENDS_FAILURE',
  'DELETE_FRIENDS_SUCCESS',
);

export const fetchFriends = () => async dispatch => {
  dispatch(fetchFriendsRequest());
  try {
    const response = await axios.get(URL);
    dispatch(fetchFriendsSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchFriendsFailure(err));
  }
};

export const addFriend = data => async dispatch => {
  dispatch(addFriendRequest());
  try {
    const response = await axios.post(URL, data);
    dispatch(addFriendSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(addFriendFailure(err));
  }
};

export const updateFriend = (id, data) => async dispatch => {
  dispatch(updateFriendsRequest());
  try {
    const response = await axios.put(`${URL}/${id}`, data);
    dispatch(updateFriendsSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(updateFriendsFailure(err));
  }
};
