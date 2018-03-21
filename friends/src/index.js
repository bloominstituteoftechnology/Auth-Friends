import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById('root'));

