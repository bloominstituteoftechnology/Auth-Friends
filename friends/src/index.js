import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';

import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENTION_COMPOSE__|| compose;

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);