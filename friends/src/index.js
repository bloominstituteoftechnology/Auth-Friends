import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 
import { Provider } from 'react-redux'; 

import { friendReducer } from './reducers/friendsReducer';

const store = createStore( friendReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));
