import { combineReducers } from 'redux';
import { friendReducer } from './index';

export default combineReducers({
    friends: friendReducer
})