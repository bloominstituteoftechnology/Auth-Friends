import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./components";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
