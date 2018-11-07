import React from 'react';
import ReactDOM from 'react-dom';
import App from "./views/App";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';

// Apply middleware and create a store with combined reducers and middleware.
const middleware = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>, 
document.getElementById('root'));
