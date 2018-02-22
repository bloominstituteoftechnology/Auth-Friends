import friendsReducer from './friendsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
    friends: friendsReducer
 });

 export default rootReducer;