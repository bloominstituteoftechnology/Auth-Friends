import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const allReducers = combineReducers({ rootReducer });
const initialState = {};
const allMiddlewares = compose(
  applyMiddleware(thunk,logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const store = createStore(allReducers, initialState, allMiddlewares);


ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'));
