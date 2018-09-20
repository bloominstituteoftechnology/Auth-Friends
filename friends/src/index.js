import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combineReducers from './reducers';
import { BrowserRouter as Router } from "react-router-dom";

const reduxDevToolsHook = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore( combineReducers, 
                        compose(applyMiddleware(thunk, logger), reduxDevToolsHook) );

// const store = createStore(combineReducers, 
//                         applyMiddleware(thunk, logger),
//                         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
