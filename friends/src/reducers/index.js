import { combineReducers } from 'redux';
import { friendReducer } from './friendReducer';

export default combineReducers({
    friends: friendReducer
});