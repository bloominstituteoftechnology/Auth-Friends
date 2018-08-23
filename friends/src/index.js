import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import rootReducer from './reducers'
import './index.css';

const store= createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
<Provider>
    <App />
</Provider>
, document.getElementById('root')
);

