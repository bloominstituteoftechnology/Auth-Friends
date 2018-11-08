import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(reducer, middleware)

ReactDOM.render(
<Provider>
<App />
</Provider> , document.getElementById('root'));


