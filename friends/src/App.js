import React from 'react';
import './App.css';
import { getToken } from './utils/api';
import { Link, Route, withRouter } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';
import LogOut from './components/LogOut';
import styled from 'styled-components';

const Nav = styled.div`
	background-color: lightgray;
	text-align: center;
	min-width: 500px;
	margin: auto;
	padding: 20px;
`;

function App() {
	const loggedIn = getToken();
	return (
		<div>
			<Nav>
				{!loggedIn && <Link to="/login">Log In</Link>}
				{!loggedIn && <Link to="/friends">Friends</Link>}
				{loggedIn && <Link to="/logout">Log Out</Link>}
			</Nav>
			<Route exact path="/login" component={Login} />
			{/* These routes will require an auth token to be set, due to our handy HOC */}
			<ProtectedRoute exact path="/friends" component={FriendsList} />
			<ProtectedRoute exact path="/logout" component={LogOut} />
		</div>
	);
}

export default withRouter(App);
