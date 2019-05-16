import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
    rootReducer, applyMiddleware(logger,thunk)
    );

ReactDOM.render(
<Provider store ={store}>
<Router>
<App />
</Router>
</Provider>, document.getElementById('root'));
