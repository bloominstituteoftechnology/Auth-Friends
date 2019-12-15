import { combineReducers } from 'redux';
import reducerFriends from './ReducerFriends';
import reducerLogin from './ReducerLogin';


export default combineReducers({
    login: reducerLogin, friends: reducerFriends
    }
);