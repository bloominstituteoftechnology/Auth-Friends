import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import { reducer } from './reducers/reducer';

//devtools for redux
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // store holds state
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

const rootElement = document.getElementById("root");
ReactDOM.render(
  //   <Provider store={store}>
  <Router>
    <App />
  </Router>,
  //   </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
