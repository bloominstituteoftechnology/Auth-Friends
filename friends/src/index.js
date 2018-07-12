import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import './index.css';
import App from './App';

const store = createStore(
    rootReducer, applyMiddleware(thunk, logger)
)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

