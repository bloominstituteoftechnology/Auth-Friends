import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import Needed Dependencies
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers";


// Create store with middleware
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
		document.getElementById('root')
);

