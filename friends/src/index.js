import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddeware } from 'redux';
import thunk from 'redux-thunk';

ReactDOM.render(<App />, document.getElementById('root'));

