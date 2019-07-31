import { combineReducers } from 'redux'
import loginReducer from './loginReducer.js'
import friendsListReducer from './FriendsListReducer'


export default combineReducers({
    login: loginReducer, friends: friendsListReducer
    }
);