import { combineReducers } from 'redux';
import { friends } from './friends';

const rootReducer = combineReducers({
	friends: friends,
});

export default rootReducer;
