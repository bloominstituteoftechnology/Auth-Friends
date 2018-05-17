import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
// needed dependancies
// applyMiddleware from redux
import { applyMiddleware, createStore } from 'redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
import logger from 'redux-logger';
import { charsReducer } from './Reducers/index';



const store = createStore(charsReducer, applyMiddleware(thunk,logger));


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );