import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {friendsReducer} from './reducer/FriendsReducer.js';
import { applyMiddleware,createStore } from 'redux';
//created store for data

const store = createStore( friendsReducer ,applyMiddleware(thunk,logger))

//add dev tools




ReactDOM.render(
  <Provider store ={store }>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
