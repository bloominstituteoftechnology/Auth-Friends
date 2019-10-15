import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './state/reducers';

import './index.css';
import App from './App';

ReactDOM.render(
	<Provider store={
		createStore(
			combineReducers({
				login: reducers.loginReducer,
				isLoading: reducers.loadingReducer,
				friendsList: reducers.friendsReducer,
				addFriend: reducers.addFriendReducer
			}),
			applyMiddleware(thunk))
	}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);