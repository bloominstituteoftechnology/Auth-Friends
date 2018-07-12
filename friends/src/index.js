import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';
import { localState, saveState } from './persistence'

import './index.css';
import { App } from './Components';

const load = localState();
const middleware = applyMiddleware(thunk, logger);

const store = createStore(
    reducer,
    load,
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

store.subscribe(() => {
    saveState(store.getState());
})


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);