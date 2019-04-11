import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import App from './App';
import friendsReducer from './reducers/friendsReducer'

const middleware = applyMiddleware(thunk, logger);

const store = createStore(friendsReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'));