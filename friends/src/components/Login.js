import React, { useState } from "react";
import { authAxios } from "../utils/authAxios";
import "./css/Login.css";

const Login = (props) => {

	const [credentials, setCredentials] = useState({ username: "", password: ""});
	const [isFetching, setIsFetching] = useState(false);

	const handleChange = event => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value
		});
	};

	const login = event => {
		event.preventDefault();
		setIsFetching(true);
	}

	return (
		<div className="login-container">
			<form 
				className="login-inputs-container"
				onSubmit={login}
			>
			<input
				className="login-base login-input"
				type="text"
				name="username"
				placeholder="username"
				//value={}
				//onChange={}
			/>
			<input
				className="login-base login-input"
				type="password"
				name="password"
				placeholder="password"
				//value={}
				//onChange={}
			/>
			<button className="login-base login-button">LOG IN</button>
			</form>
		</div>
	);
};

export default Login;