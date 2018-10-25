import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {friendsReducer } from './reducers'


const middlewares = compose(
    applyMiddleware(thunk,logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)


const store = createStore(friendsReducer,middlewares)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
