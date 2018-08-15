import App from './components/App';
import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(logger, thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
