import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/App';
import rootReducer  from './reducers';

const store = createStore( rootReducer, applyMiddleware(thunk, logger))

console.log(store)
ReactDOM.render(
    <Provider store={store}>    
        <App />
    </Provider>, 
    document.getElementById('root'));
    registerServiceWorker();
