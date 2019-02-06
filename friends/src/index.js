import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import mainReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const friendStore = createStore(
    mainReducer,
    applyMiddleware(thunk, logger)
)
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={friendStore}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
