import React, { useState } from 'react';
// import axios from 'axios';
import api from '../utils/api';

function Logout(props) {
	const [data, setData] = useState({
		username: '',
		password: '',
	})

	const handleChange = (event) => {
		setData({ 
			...data,  
				[event.target.name]: event.target.value, 
		})
	} 

	const handleSubmit = (event) => {
		event.preventDefault()

		api()
		.post('/api/login', data)
		.then(result => {
			console.log(result);
			localStorage.setItem('token', result.data.payload)
			props.history.push('/FriendsList')
		})
		.catch(error => {
			console.log('error you idiot')
		})
	}

	return (
		<div className='logout'>

			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input 
					type='text'
					name='username'
					placeholder='Username'
					value={data.username}
					onChange={handleChange}
				/>

				<input 
					type='password'
					name='password'
					placeholder='Password'
					value={data.password}
					onChange={handleChange}
				/>

				<button>Login</button>
			</form>
		</div>
	)
}

export default Logout;