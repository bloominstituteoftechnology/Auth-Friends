import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import friends from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={createStore(friends, applyMiddleware(thunk, logger))}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
