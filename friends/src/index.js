import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import {reducer} from './reducers/reducer';

const store = createStore( reducer, applyMiddleware( thunk, logger ));



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


