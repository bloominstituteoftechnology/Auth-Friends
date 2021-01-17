import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
	const [formValues, setFormValues] = useState({
		username: '',
		password: ''
	});

	const handleChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		});
	};

	const login = e => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', formValues)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="login__container">
			<h1>Friends</h1>

			<form onSubmit={login}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					value={formValues.username}
					onChange={handleChange}
					placeholder="Username"
				/>
				<label htmlFor="password">password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={formValues.password}
					onChange={handleChange}
					placeholder="Password"
				/>
				<button disabled={!formValues} type="submit">
					Log in
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
