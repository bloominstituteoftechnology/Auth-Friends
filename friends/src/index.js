import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers'
import './index.css';
import App from './App';

const middleware = applyMiddleware(logger, thunk);
const store =createStore(reducers, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
