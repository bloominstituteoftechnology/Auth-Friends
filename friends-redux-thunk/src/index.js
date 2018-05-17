import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import combineReducers from './reducers'

const store = createStore( combineReducers, applyMiddleware(thunk, logger) )
console.log("store",store);
console.log("store.friendsReducer",store.friendsReducer);
console.log(combineReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
 