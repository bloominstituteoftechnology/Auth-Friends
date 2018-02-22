import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import App from "./App";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
