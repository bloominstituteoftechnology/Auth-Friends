import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Friends  from './components';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer  from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <Friends />
  </Provider>,
  document.getElementById('root'));
