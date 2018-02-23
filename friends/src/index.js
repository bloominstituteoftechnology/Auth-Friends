import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
