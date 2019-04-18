import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { friendReducer } from './friendReducer'

export default combineReducers({
    loginReducer, friendReducer
});
