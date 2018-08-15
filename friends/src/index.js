import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import Typography from "typography";
import theme from "typography-theme-judah";

import "./index.css";
import App from "./App";
import rootReducer from "./Reducers";

const typography = new Typography(theme);

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

typography.injectStyles();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);
