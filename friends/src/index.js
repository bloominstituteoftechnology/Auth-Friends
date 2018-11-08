import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import App from "./App";
import FriendsReducer from "./reducers/FriendsReducer";

const middleware = applyMiddleware(logger, thunk);

const store = createStore(FriendsReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
