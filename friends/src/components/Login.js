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
		authAxios().post("/login", credentials)
			.then(res => {
				window.localStorage.setItem("friendsToken", res.data.payload);
				props.history.push("/friends");
			})
			.catch(err => console.log(err));
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
				value={credentials.username}
				onChange={handleChange}
			/>
			<input
				className="login-base login-input"
				type="password"
				name="password"
				placeholder="password"
				value={credentials.password}
				onChange={handleChange}
			/>
			<button className="login-base login-button">LOG IN</button>
			</form>
		</div>
	);
};

export default Login;