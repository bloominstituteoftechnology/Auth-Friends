import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'));


