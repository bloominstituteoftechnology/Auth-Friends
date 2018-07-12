import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import { App } from "./components";
import { Provider } from "react-redux";
import { createStore } from "redux";

// more dependencies

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
