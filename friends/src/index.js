import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
, applyMiddleware(thunk, logger));



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



