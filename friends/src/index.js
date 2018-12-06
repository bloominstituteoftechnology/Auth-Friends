import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// This is the redux stuff, whoot whoot
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//import the reducer!
import friendReducer from './Store/Reducer';

const store = createStore( friendReducer, applyMiddleware(thunk, logger));

ReactDOM.render(

<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
