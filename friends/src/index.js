import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './reducers/reducerIndex';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import './index.css';
import App from './App';

const store = createStore(reducer, /* {fetchState: 'resting', friends: {byId: {}, allIds: []}}, */ composeWithDevTools(
  applyMiddleware(thunk, logger)));


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));