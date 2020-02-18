import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers'
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(logger, thunk))

ReactDOM.render(<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
