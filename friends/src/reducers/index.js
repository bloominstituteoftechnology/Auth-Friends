import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import friendsReducer from "./friendsReducer";

export default combineReducers({
  login: loginReducer,
  friends: friendsReducer
});
