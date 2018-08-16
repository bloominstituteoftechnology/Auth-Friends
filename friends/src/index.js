import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {rootReducer} from './reducers';

import './styles/index.css';
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk, logger)); 



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

