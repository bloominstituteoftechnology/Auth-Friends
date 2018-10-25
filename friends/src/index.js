import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

console.log(store.getState());
store.dispatch({
    type: 'FETCHING'
})
console.log(store.getState());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
);
