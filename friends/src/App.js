import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
	return (
		<div className="App">
			<Nav />
			<Route exact path="/login" component={Login} />
			{/* <Route exact path="/friends" component={Friends} /> */}
			{/* These routes will require an auth token to be set, due to our handy HOC */}
			<ProtectedRoute exact path="/friends" component={FriendsList} />
			<ProtectedRoute exact path="/add-friend" component={AddFriend} />
		</div>
	);
}

export default withRouter(App);
