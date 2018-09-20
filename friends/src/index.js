import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();