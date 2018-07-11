import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider }from 'react-redux';
import {rootReducer} from './reducers/index';

const allStoreEnhancers = compose(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, allStoreEnhancers);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

