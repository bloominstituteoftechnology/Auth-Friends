import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
// import reducers
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let STORAGE_WAREHOUSE = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
