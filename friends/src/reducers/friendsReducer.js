import { combineReducers } from 'redux';
import { friendReducer } from './reducers/index';

export default ({
    friends: friendReducer
})