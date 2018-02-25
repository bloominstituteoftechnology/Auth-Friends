import { singleFriendReducer } from "./singleFriendReducer";
import { friendsReducer } from "./friendsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  friendsReducer,
  singleFriendReducer
})
