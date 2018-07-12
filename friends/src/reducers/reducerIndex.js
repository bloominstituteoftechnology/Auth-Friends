import { combineReducers } from 'redux';
import friendsReducer from './friendsReducer'
import fetchStateReducer from './fetchStateReducer'

const reducer = combineReducers({friends: friendsReducer, fetchState: fetchStateReducer});
export default reducer;


//Selectors
export { getFriends } from './friendsReducer';
export { getFetchState } from './fetchStateReducer';