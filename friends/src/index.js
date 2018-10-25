import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import reducers from './reducers';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
