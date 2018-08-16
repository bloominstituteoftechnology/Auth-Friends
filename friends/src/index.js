import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux'; 
import {FriendsReducer} from './reducers'; 

const store = createStore(FriendsReducer, applyMiddleware(thunk)); 

ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider >
    , document.getElementById('root'));