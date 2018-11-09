import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger, thunk)

const store = createStore(rootReducer,middleware)

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>,
    document.getElementById('root'));


