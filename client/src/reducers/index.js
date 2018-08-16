import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  fetchFriendsRequest,
  fetchFriendsSuccess,
  fetchFriendsFailure,
  addFriendRequest,
  addFriendSuccess,
  addFriendFailure,
} from '../actions';

const friends = handleActions(
  {
    [combineActions(fetchFriendsSuccess, addFriendSuccess)]: (_, action) =>
      action.payload,
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

export default combineReducers({
  friends,
  isFetching,
  isAdding,
});
