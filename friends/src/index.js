import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const rootReducer = null;

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
ReactDOM.render(<App />, document.getElementById('root'));
