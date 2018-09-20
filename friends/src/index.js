import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
