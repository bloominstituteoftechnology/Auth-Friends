import { handleAction, handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';

import {
  fetchFriendsRequest,
  fetchFriendsSuccess,
  fetchFriendsFailure,
} from '../actions';

const friends = handleAction(
  fetchFriendsSuccess,
  (_, action) => action.payload,
  [],
);

const isFetching = handleActions(
  {
    [fetchFriendsRequest]: () => true,
    [combineActions(fetchFriendsFailure, fetchFriendsSuccess)]: () => false,
  },
  false,
);

export default combineReducers({
  friends,
  isFetching,
});
