import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddlware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddlware(thunk, logger));

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
