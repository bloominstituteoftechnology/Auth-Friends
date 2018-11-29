import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import Needed Dependencies
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import index from "./reducers/index";


// Create store with middleware
const store = createStore(index, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
		document.getElementById('root')
);

