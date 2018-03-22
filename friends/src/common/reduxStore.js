import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import getFriendsReducer from "../reducers/getFriendsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = composeEnhancers(applyMiddleware(logger, thunk));
export const store = createStore(getFriendsReducer, middleWare);
