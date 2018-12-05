import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

import { createStore, applyMiddleWare } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleWare(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
