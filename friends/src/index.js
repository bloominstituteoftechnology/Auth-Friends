// react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// redux
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/friendReducers';
// service worker
import registerServiceWorker from './registerServiceWorker';
// styles
import './index.css';

let STORAGE_WAREHOUSE = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
