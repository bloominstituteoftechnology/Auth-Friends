import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { injectGlobal } from 'styled-components';
import App from './components/app';
import rootReducer from './store/reducers/';
// import registerServiceWorker from './registerServiceWorker';

injectGlobal`
    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    }

    .App {
    text-align: center;
    }

    .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
    }

    .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
    }

    .App-title {
    font-size: 1.5em;
    }

    .App-intro {
    font-size: large;
    }

    @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
    }
`;

const reduxDevToolsHook = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger), reduxDevToolsHook) );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
// registerServiceWorker();
