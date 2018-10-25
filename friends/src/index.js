
//-- Dependencies --------------------------------
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer.js';
import Friends from './friends.js';

//-- Generate Store ------------------------------
const store = createStore(rootReducer, applyMiddleware(thunk));

//-- Render Page ---------------------------------
ReactDOM.render(
  <Provider store={store}>
    <Friends />
  </Provider>,
  document.getElementById('root')
);
