import React from 'react';

function Logout(props) {

	const handleSubmit = (event) => {
		event.preventDefault()

	
	}

	return (
		<div className='logout'>

			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input 
					type='text'
					name='username'
					placeholder='Username'
				/>

				<input 
					type='password'
					name='password'
					placeholder='Password'
				/>

				<button>Login</button>
			</form>
		</div>
	)
}

export default Logout;