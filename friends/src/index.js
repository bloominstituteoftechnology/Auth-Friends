// React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Dependencies
import registerServiceWorker from './registerServiceWorker';

// Reducers
import { friendsListReducer, postFriendFormReducer } from './store/reducers';

// MiddleWare
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Components
import App from './App';

// Styles
import './index.css';

const reducers = combineReducers({ friendsListReducer, postFriendFormReducer });
const middleWareQueue = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleWareQueue);
const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store = { store }>
		<Router>
			<Route path = '/' component = { App } />
		</Router>
	</Provider>, 
	rootElement
);

registerServiceWorker();
