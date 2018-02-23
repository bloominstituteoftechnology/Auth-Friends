import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));
