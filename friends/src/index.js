import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/reducer';
import  logger  from 'redux-logger';
import  thunk  from 'redux-thunk';
import { BrowserRouter as Router} from 'react-router-dom'

const middleware = applyMiddleware(logger, thunk);

const store = createStore(reducer, middleware)

ReactDOM.render(
<Router>
<Provider store={store}>
<App />
</Provider> 
</Router>, document.getElementById('root'));


