import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from './reducers';

const reduxDevToolsHook = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger), reduxDevToolsHook));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
