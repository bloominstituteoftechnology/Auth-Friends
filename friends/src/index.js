import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Friends  from './components';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import {friendsReducer}  from './reducers'

const store = createStore(friendsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <Friends />
  </Provider>,
  document.getElementById('root'));
