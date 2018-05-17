import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; //async js
import logger from 'redux-logger'; // makes console.log pretty


    import rootReducer from './Reducers';

    const store = createStore(rootReducer, applyMiddleware(thunk, logger));

    ReactDOM.render(
          <Provider store={ store } >
            <App />
         </Provider >, document.getElementById('root')
        );