import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { friendReducer } from "./reducers/friendsreducer";

const store = createStore(friendReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
