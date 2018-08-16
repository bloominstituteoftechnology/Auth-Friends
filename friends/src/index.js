import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import TodoListContainer from "./containers/TodoListContainer";
import NotesContainer from "./containers/NotesContainer";
import { logger } from "./store/middleware/logger";
import "./styles.css";

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<App />, document.getElementById("root"));
