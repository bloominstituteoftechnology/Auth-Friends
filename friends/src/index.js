import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Thunk from "redux-thunk";

const store = createStore({}, applyMiddleware(Thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
