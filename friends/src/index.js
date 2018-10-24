import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {createStore, applyMiddleware} from "redux";

import combineReducers from "./reducers";
import "./index.css";
import App from "./App";

const store = createStore(
  () => {} /*combineReducers*/,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
