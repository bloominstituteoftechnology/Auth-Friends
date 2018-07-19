import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';

const store = createStore(friendsReducer, applyMiddleWare(thunk, logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root')
);

