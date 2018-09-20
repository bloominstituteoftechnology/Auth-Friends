import { friendsReducer } from "./friendsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ friendsReducer });

export default rootReducer;
