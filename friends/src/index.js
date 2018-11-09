import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from '../../../Library/Caches/typescript/3.1/node_modules/redux';

const middleware = applyMiddleware(thunk);
const store = createStore(asYetUnnamedReducer, middleware)

ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
