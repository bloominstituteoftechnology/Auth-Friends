import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import combineReducers from './reducers';

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
