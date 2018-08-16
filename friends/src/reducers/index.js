import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';

//use combine reducers to avoid conflicts with actions and runtime problems. 
//also use reducers to simplify the switch statement
export default combineReducers({
    friends: friendsReducer
  });
  