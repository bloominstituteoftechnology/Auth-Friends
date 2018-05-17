import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/app';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; //async js
import logger from 'redux-logger'; // makes console.log look good

// import friendsReducer from './Reducers'

const store = createStore(friendsReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));