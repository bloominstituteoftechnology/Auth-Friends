import React from 'react'

export const Login = (props) => {
	return(
		<form action="">
			<label htmlFor="username">Username</label>
			<input name="username" type="text" value="" />
			<label htmlFor="password">Password</label>
			<input name="password" type="password" value="" />
		</form>
	)
}

export default Login;