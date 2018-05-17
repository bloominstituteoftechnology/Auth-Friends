import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

const quatloo = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={quatloo}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
