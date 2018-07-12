import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from '../node_modules/redux';
import thunk from '../node_modules/redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
