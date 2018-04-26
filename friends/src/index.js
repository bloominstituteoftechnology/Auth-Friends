import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// needed dependencies
import { applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk'; // taking entire library (aka middleware)
import  logger  from 'redux-logger';  // taking entire library (aka middleware)
import { friendsReducer } from './reducers/friendsReducer';
import { combineReducers } from 'redux';

// Apply Middleware
const middleware = applyMiddleware(thunk, logger);

// Create store
const store = createStore(friendsReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root')
);

