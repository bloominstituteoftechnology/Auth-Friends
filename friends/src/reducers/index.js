import { combineReducers } from "redux";
import { friendsReducer } from "./fetchReducer";

export default combineReducers({
  friends: friendsReducer
});
