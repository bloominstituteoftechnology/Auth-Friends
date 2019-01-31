import React from "react";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { rootReducer } from "./reducer";
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const rootDiv = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDiv
);
