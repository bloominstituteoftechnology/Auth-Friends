import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Thunk from "redux-thunk";
import {friendsReducer} from './reducers/friendsReducer';

const store = createStore(friendsReducer, applyMiddleware(Thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
