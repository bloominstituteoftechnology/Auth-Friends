import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  fetchFriendsRequest,
  fetchFriendsSuccess,
  fetchFriendsFailure,
  addFriendRequest,
  addFriendSuccess,
  addFriendFailure,
  updateFriendsSuccess,
  updateFriendsRequest,
  updateFriendsFailure,
} from '../actions';

const friends = handleActions(
  {
    [combineActions(
      fetchFriendsSuccess,
      addFriendSuccess,
      updateFriendsSuccess,
    )]: (_, action) => action.payload,
  },
  [],
);

const isFetching = handleActions(
  {
    [fetchFriendsRequest]: () => true,
    [combineActions(fetchFriendsFailure, fetchFriendsSuccess)]: () => false,
  },
  false,
);

const isAdding = handleActions(
  {
    [addFriendRequest]: () => true,
    [combineActions(addFriendSuccess, addFriendFailure)]: () => false,
  },
  false,
);

const isUpdating = handleActions(
  {
    [updateFriendsRequest]: () => true,
    [combineActions(updateFriendsSuccess, updateFriendsFailure)]: () => false,
  },
  false,
);

export default combineReducers({
  friends,
  isFetching,
  isAdding,
  isUpdating,
});
