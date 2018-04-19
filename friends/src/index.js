import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { App } from './Components/component';
import  App  from './Components/App';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import {friendsReducer} from './Reducers/reducers'
// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

const store = createStore(friendsReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// charsReducer