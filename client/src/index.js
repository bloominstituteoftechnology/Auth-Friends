import React from 'react';
import ReactDOM from 'react-dom';
import Typography from 'typography';
import theme from 'typography-theme-judah';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './reducers';

const typography = new Typography(theme);

typography.injectStyles();

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
