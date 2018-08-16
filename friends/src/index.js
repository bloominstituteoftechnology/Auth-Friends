import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const store = createStore((), applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, document.getElementById('root')
);
