
import { combineReducers } from 'redux';
import Friends from './Friends';

const rootReducer = combineReducers({
  friendsGetRequest: Friends,
  
});

export default rootReducer;