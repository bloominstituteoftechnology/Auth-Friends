import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { loadState, saveState } from './localstorage';

import {reducer} from './reducers/reducer';

// const persistedState = loadState();
const store = createStore( reducer, applyMiddleware( thunk ));

//persistedState,
// store.subscribe(() => {
//     saveState(store.getState());
//   })

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


