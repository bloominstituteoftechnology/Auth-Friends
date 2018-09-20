import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {reducer} from "./reducers";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
