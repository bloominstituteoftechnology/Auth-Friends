import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

// import rootReducer from "./reducers"; // still need to use

const store = createStore(applyMiddleware(thunk, logger))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
         </Router>
    </Provider>, 
    document.getElementById('root')
);
