import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk";
import logger from "redux-logger";
import { Provider } from "redux-logger";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

ReactDOM.render(<App />, document.getElementById('root'));

