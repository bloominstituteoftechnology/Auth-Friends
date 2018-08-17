import { combineReducers } from "redux";
import getReducer from './getReducers';
import saveReducer from './saveReducers';
import editReducer from './editReducers';
import delReducer from './delReducer';

export default combineReducers({
    getReducer,
    saveReducer,
    editReducer,
    delReducer
});
