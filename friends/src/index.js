import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';


import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

import { BrowserRouter as Router } from 'react-router-dom';




// const store = createStore( rootReducer , applyMiddleware(thunk, logger));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( 
    applyMiddleware(thunk, logger)
  ));

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);