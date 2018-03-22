import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import { App } from './components';

import initRed from './reducers/initRed'
// import newRed from './reducers/newRed'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleman = applyMiddleware(logger, thunk);

const store = createStore(
    initRed,
    // newRed, 
    composeEnhancers(middleman)
    
);

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));

