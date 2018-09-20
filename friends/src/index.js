import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Add dependancies
import { Provider } from 'react-redux';
// thunk from redux-thunk
import thunk from 'redux-thunk';
// logger from redux-logger
import logger from 'redux-logger';
// createStore and applyMiddleware from redux
import { createStore, applyMiddleware } from 'redux';
// rootReducer from ./reducers
import combineReducers from './store/reducers';


// This line instantiates our central Redux store.
// The `createStore` function receives the reducer
// that is responsible for updating the store, along
// with any initial state that we may want the store
// to start out with (combineReducers, applyMiddleware(thunk, logger)).
const store = createStore(combineReducers, applyMiddleware(thunk, logger));

// Here, we wrap our main React component inside of
// Provider tags, which come from the react-redux package.
// This is needed because the store needs to know where it
// is passing its state to. The Provider component is also
// where the store "lives".
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

