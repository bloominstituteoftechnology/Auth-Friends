import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/reducer';
import  logger  from 'redux-logger';
import  thunk  from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(reducer, middleware)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider> , document.getElementById('root'));


