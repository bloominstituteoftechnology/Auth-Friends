import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import friendReducer from './reducers/friendReducer';

const store = createStore(friendReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));


