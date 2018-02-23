 //here the react stuff
 import React from 'react';
 import ReactDOM from 'react-dom';
 import App from './App';
 //the redux stuff
 import { Provider } from 'react-redux';
 import { createStore, applyMiddleware, compose } from 'redux';
 import friends from './reducers';
 import thunk from 'redux-thunk';
 import logger from 'redux-logger';
 //styles goes here
 import './index.css';
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(friends, composeEnhancers(
   applyMiddleware(thunk, logger)
 ));
 
 ReactDOM.render(
     <Provider store={store}>
         <App />
     </Provider>
     , document.getElementById('root'));
