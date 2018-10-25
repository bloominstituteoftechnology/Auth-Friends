import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { loadingReducer } from './loadingReducer';

const rootReducer=combineReducers({
    friends: friendsReducer,
    loading:  loadingReducer
});
export default rootReducer

