import { combineReducers } from "redux";
import { reducer } from "./friendsReducer";

export default combineReducers ({
	friendReducer: reducer
});
