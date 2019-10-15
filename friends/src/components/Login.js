import React from 'react';
import axios from 'axios';

export const Login = ({ formData, setForm, onInputChange }) => {
	const onLogin = (e) => {
		e.preventDefault();
		if(formData.username.length === 0 || formData.password.length === 0) return false;
		axios.post(`http://localhost:5000/api/login`, formData)
			.then(({ data }) => {
				console.log('logged in', data);
				localStorage.setItem('login_token', data.payload)
				setForm({ username: "", password: "" });
			})
			.catch(err => console.log(err));
	}
	return (
		<>
			<h1>Login</h1>
			<form onSubmit={onLogin}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					name="username"
					type="text"
					value={formData.username}
					onChange={onInputChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					value={formData.password}
					onChange={onInputChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default Login;