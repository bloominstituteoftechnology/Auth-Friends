import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import * as withAuth from '../helpers/withAuth';

export const Login = ({ history, login, onLoginInputChange, attemptLogin, logout, isLoggedIn }) => {
	const onLogin = (e) => {
		e.preventDefault();
		if(login.username.length === 0 || login.password.length === 0) return false;
		attemptLogin(login);
		history.push('/friends');
	}
	const onInputChange = e => {
		onLoginInputChange(e.target);
	}
	const onLogout = () => {
		logout();
		history.push('/');
	}
	return withAuth.isLoggedIn() ? (
		<button onClick={onLogout}>Logout</button>
	) : (
		<>
			<h1>Login</h1>
			<form onSubmit={onLogin}>
				<label htmlFor="username">Username (Lambda School)</label>
				<input
					id="username"
					name="username"
					type="text"
					value={login.username}
					onChange={onInputChange}
				/>
				<label htmlFor="password">Password (i&lt;3Lambd4)</label>
				<input
					id="password"
					name="password"
					type="password"
					value={login.password}
					onChange={onInputChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default connect(state => state, actionCreators)(Login);