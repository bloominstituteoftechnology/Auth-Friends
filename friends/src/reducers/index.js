import { combineReducers } from "redux";
import { friendsReducer } from "./friendsReducer";

export default combineReducers({
  friends: friendsReducer
});
