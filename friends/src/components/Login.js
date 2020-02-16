import React, { useState } from "react";
import { Spinner } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
	const [login, setLogin] = useState({ username: "", password: "" });
	const [loading, setLoading] = useState(false);

	const handleChange = e => {
		setLogin({ ...login, [e.target.name]: e.target.value });
	};
  
  
	const onSubmit = e => {
		e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
     }, 3000);
		axiosWithAuth()
			.post("/login", login)
			.then(res => {
				localStorage.setItem("token", res.data.payload);
				setLogin(login);
				props.history.push("/friends" || "/edit-friends");
			})
      .catch(err => {
        localStorage.removeItem('token');
        console.log("You could not login", err);
      }, []);
	};

	return (
		<section className="login">
			{!loading ? (
				<form onSubmit={onSubmit}>
					<input type="text" name="username" placeholder="Username" value={login.username} onChange={handleChange} />
					<input type="password" name="password" placeholder="Password" value={login.password} onChange={handleChange} />
					<button>Login</button>
				</form>
			) : (
				<div>
					<Spinner size="sm" color="success" />
					<Spinner size="sm" color="success" />
					<Spinner size="sm" color="success" />
				</div>
        )}
    </section>
    
	);
};

export default Login;
