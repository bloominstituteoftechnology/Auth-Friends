import React, { useState } from "react";
import { Spinner, Button, Card } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const button = {
	color: "#77ad17",
	borderRadius: "25px",
	width: "50%",
	margin: "1% auto",
	fontSize: "20px",
	border: "2px solid #77ad17",
};

const card = {
	height: "250px",
	borderTop: "5px solid",
	borderBottom: "5px solid",
};

const Login = props => {
	const [login, setLogin] = useState({ username: "", password: "" });
	

	const handleChange = e => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post("/login", login)
			.then(res => {
				localStorage.setItem("token", res.data.payload);
				setLogin(login);
				props.history.push("/friends");
			})
			.catch(err => {
				localStorage.removeItem("token");
				console.log("You could not login", err);
			}, []);
	};

	return (
		<section className="login">
				<form className="forms" onSubmit={onSubmit}>
					<Card outline color="warning" style={card}>
						<input
							className="input"
							type="text"
							name="username"
							placeholder="Username"
							value={login.username}
							onChange={handleChange}
						/>
						<input
							className="input"
							type="password"
							name="password"
							placeholder="Password"
							value={login.password}
							onChange={handleChange}
						/>
						<Button style={button} color="warning">
							Login
						</Button>
					</Card>
				</form>
			
			
		</section>
	);
};

export default Login;
