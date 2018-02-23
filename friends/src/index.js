import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer.js';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));