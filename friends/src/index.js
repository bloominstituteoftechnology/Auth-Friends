import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import appReducer from './reducers';

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(appReducer, applyMiddleware(logger, thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
