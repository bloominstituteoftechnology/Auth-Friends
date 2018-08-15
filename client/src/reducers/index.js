import { handleAction, handleActions } from 'redux-actions';
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

export default combineReducers({
  friends,
});
