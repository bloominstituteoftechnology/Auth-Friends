import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import Dependencies
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

// Create store pass it reducer and middleware
// wrap <App /> in provider tags

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

