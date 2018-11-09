import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import {friendsReducer} from './FriendsReducer'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'
import App from './App';

const store = createStore(
    friendsReducer,
    /* applyMiddleware goes here */
    applyMiddleware(logger, thunk)
);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
