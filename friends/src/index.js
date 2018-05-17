Iimport React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Provider from

import './index.css';
import App from './App.js';
import { reducer } from './Reducers/index.js';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);