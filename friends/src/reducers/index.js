import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  friends: friendsReducer,
  fetching: loadingReducer
});
