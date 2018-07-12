import { combineReducers } from 'redux';
import friendsReducer from './friendsReducer';
import requestReducer from './requestReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  friends: friendsReducer,
  request: requestReducer,
  errors: errorsReducer
});
