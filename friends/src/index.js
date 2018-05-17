import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css'
import App from '../src/components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { friendReducer } from '../src/reducers'

const store = createStore(friendReducer, applyMiddleware (thunk, logger));


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
