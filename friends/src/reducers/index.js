import { combineReducers } from "redux";
import { friendsReducer } from "./friendsReducer";
import { soloReducer } from "./soloFriend";

export default combineReducers({
  friendsReducer,
  soloReducer
});
