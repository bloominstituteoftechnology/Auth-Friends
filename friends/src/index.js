import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';
import reducer from "./reducers";

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
