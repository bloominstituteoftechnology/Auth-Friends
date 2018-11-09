import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import appReducer from './reducers';
import App from './App';

ReactDOM.render(
  <Provider store={createStore(appReducer, applyMiddleware(logger, thunk))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
