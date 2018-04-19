import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//create store & connect react components
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

//hook up store using Provider tag
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root')
);
