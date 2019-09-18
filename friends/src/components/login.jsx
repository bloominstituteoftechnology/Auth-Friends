import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

function Login(props) {
	const [credentials, setCredintials] = React.useState({username: "", password: ""})
	
	function changeHandler (e) {
		setCredintials({...credentials, [e.target.name]: e.target.value});
	};

	function login (e) {
		e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
				console.log(res);
        localStorage.setItem("token", res.data.payload);
        // Once we complete push the user to a private page
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
	};
	
	return(
		<div>
			<h1>Please Login</h1>
			<form onSubmit={login}>
				<input 
					type="text"
					name={"username"}
					value={credentials.username}
					onChange={changeHandler}
					placeholder="JohnDoe"
				/>
				<input 
					type="password"
					name={"password"}
					value={credentials.password}
					onChange={changeHandler}
				/>
				<button type="submit">Submmit</button>
			</form>
		</div>
	)
}

export default Login;