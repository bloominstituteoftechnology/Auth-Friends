import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import friendReducer from './reducers/friendReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

const store = createStore(friendReducer, applyMiddleware(logger, thunk));


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
