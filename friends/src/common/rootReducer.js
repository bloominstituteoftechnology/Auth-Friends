import { combineReducers } from 'redux';

import friendsReducer from '../friends/friendsReducer';

export default combineReducers({
  friends: friendsReducer,
})