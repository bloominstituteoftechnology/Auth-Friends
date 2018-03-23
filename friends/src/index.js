import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import friendsReducer from './reducer';

const middleware = applyMiddleware(logger, thunk);
const store = createStore(friendsReducer, middleware);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
