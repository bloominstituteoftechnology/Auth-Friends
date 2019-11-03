import React, { useState } from 'react';
import api from '../utils/api'



function SignIn(props){
	const [error, setError] = useState()
	const [data, setData] = useState({
		username: '',
		password: ''
	})

	const handleChange = e =>{
		setData({
			...data, 
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e =>{
		e.preventDefault()

		api()
			.post('/login', data)
			.then((res)=>{
				localStorage.setItem("token",res.data.payload);
				props.history.push('/friends')
			})
			.catch((err)=>{
				setError(err.response.data.message)
			})

		

	}

	return(
		<div className='sign-in'>
			<h2> Sign In </h2>
			<form onSubmit ={handleSubmit}>
				{error && <div className='error'>{error}</div>}
				<input type='username' name='username' placeholder='username' value={data.username} onChange ={handleChange} /> <br/>
				<input type='password' name='password' placeholder='password' value={data.password} onChange ={handleChange} /><br/>

				<button type='submit'> Sign In </button>
			</form>
		</div>
		)
}

export default SignIn;