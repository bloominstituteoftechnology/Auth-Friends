 //here the react stuff
 import React from 'react';
 import ReactDOM from 'react-dom';
 import App from './App';
 //the redux stuff
 import { Provider } from 'react-redux';
 import { createStore, applyMiddleware } from 'redux';
 import friends from './reducers';
 import logger from 'redux-thunk';
 import thunk from 'redux-logger';
 //styles goes here
 import './index.css';
 
 const store = createStore(friends, applyMiddleware(thunk, logger), 
   window.__REDUX_DEVTOOLS_EXTENSION__ && 
   window.__REDUX_DEVTOOLS_EXTENSION__());
 
 ReactDOM.render(
     <Provider store={store}>
         <App />
     </Provider>
     , document.getElementById('root'));
