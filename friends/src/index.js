import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App  from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware} from 'redux';
import {fetcher} from './reducers';


const store = createStore(fetcher, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
