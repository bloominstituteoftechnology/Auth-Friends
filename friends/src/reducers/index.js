import { combineReducers } from "redux";
import addNewFriendReducer from "./addNewFriendReducer";
import { setInitialStateReducer } from "./setInitialStateReducer";

export default combineReducers({
  addNewFriendReducer,
  setInitialStateReducer
});
