import { singleFriendReducer } from "./singleFriendReducer";
import { friendsReducer } from "./friendsReducer";
import { combinedReducers } from "redux";

export default combineReducers({
  friendsReducer,
  singleFriendsReducer
})
