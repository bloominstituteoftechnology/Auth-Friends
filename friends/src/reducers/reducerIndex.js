import { combineReducers } from 'redux';
import friendsReducer from './friendsReducer';
import fetchStateReducer from './fetchStateReducer';
import pageContentStateReducer from './pageContentStateReducer';

const reducer = combineReducers(
  {
    friends: friendsReducer,
    fetchState: fetchStateReducer,
    pageContentState: pageContentStateReducer,
  }
);
export default reducer;


//Selectors
export { getFriends } from './friendsReducer';
export { getFetchState } from './fetchStateReducer';
export { getPageContentState } from './pageContentStateReducer';