import { combineReducers } from "redux";
import { friendsReducer } from "./friendsReducer";
import { oneFriendReducer } from "./oneFriendReducer.js";

export default combineReducers({
  friendsReducer,
  oneFriendReducer
});
