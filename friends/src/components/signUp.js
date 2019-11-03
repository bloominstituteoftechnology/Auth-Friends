import React, { useState, useEffect } from 'react';
import api from '../utils/api';



function SignUp(props){
	const [error, setError] = useState()
	const [user, setUser] = useState({
		username: '',
		password: ''
	})

	const handleChange = e =>{
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e =>{
		e.preventDefault()
		
		api().post('/signup', user)

		props.history.go('/sigin')
	}

	return(
		<div className='sign-in'>
			<h2> Sign Up </h2>
			<form>
				{error && <div className='error'>{error}</div>}
				<input type='email' name='email' placeholder='email' value='email' onChange={handleChange} /> <br/>
				<input type='text' name='password' placeholder='password' value='password' onChange={handleChange} /> <br/>

				<button type='submit'> Register </button>
			</form>
		</div>
		)
}

export default SignUp;