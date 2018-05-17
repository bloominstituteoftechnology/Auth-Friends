import { combineReducers } from 'redux';
import {fetchingReducer} from './fetchingReducer.js';

export default combineReducers({
  fetching: fetchingReducer,
});