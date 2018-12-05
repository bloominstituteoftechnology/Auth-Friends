import { combineReducers } from "redux";
import { friendsReducer } from "./fetchReducer";

export default combineReducers({
  info: friendsReducer
});
