Iimport React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, applyMiddleware } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App.js';
import { reducer } from './Reducers/index.js';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);