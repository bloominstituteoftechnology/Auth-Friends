import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from './reducers'
import logger from 'redux-logger'
import App from './App'
const middleware = applyMiddleware(logger, thunk)
const store = createStore(rootReducer,middleware)


ReactDOM.render(
    <Provider store={store}>
    <Router>
            <App />
    </Router>
    
    </Provider>, document.getElementById('root'));

