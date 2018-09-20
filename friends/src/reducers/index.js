import {combineReducers} from 'redux';
import {friends} from './friends';
import {friend} from './friend';

export default combineReducers({
    friends,
    friend
});