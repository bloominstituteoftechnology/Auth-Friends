import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger' 
import { Provider } from 'react-redux';
import app from './Reducer';


const store = createStore(
    app,
    applyMiddleware((logger), (thunk)),
);

ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>, 
    
document.getElementById('root'));
registerServiceWorker();

export default store;
