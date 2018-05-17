import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; 
import { applyMiddleware, createStore } from 'redux'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 
import combineReducers from './reducers'; 

const store = createStore(combineReducers, applyMiddleware(thunk, logger)); 

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));