import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

ReactDOM.render(<App />, document.getElementById('root'));
