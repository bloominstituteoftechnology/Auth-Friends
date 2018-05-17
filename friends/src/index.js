import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import friendsReducer from "./reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(friendsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
