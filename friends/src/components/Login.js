import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import axios from "axios";

// IF USING HOOKS
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axiosWithAuth()
      .post(`/login`, credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="login-page">
      <h1 className="login-header">Welcome...Log-In!</h1>

      <form onSubmit={login}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <br />
        <div className="password-input">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <br />
        <button className="login-btn">Log in</button>
      </form>
    </div>
  );
};

export default Login;
