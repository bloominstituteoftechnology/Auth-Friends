import React, { useState } from 'react';
import api from '../utils/api';
import './Login.scss';

export default function Login(props) {
	const [ error, setError ] = useState();
	const [ data, setData ] = useState({
		username: '',
		password: ''
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		api()
			.post('/api/login', data)
			.then((res) => {
				console.log(res.data.payload);
				localStorage.setItem('token', res.data.payload);
				props.history.push('/friends');
			})
			.catch((err) => {
				setError(err);
			});
	};
	return (
		<div className="login-container">
			<form className="form-container" onSubmit={handleSubmit}>
				{error && <div className="error">Error</div>}
				<input type="text" name="username" placeholder="Name" value={data.username} onChange={handleChange} />
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={data.password}
					onChange={handleChange}
				/>
				<button type="submit">Log In</button>
			</form>
		</div>
	);
}
