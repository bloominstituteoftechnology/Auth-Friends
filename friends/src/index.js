import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import friendsReducer from './reducers';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, 
  document.getElementById('root'));
