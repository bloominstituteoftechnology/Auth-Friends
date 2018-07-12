import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { friendsReducer } from '../src/reducers'




const store = createStore(friendsReducer,applyMiddleware(reduxThunk, logger))

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));
