import {fetchingReducer as fetching} from './fetchingReducer';
import {addFriendReducer as addFriend} from './addFriendReducer';

import {combineReducers} from 'redux';

export default combineReducers({fetching, addFriend});



