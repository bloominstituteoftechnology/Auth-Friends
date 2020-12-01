import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        console.log("success: ", res);
        localStorage.setItem("token", JSON.stringify(res.data.payload));
      })
      .catch((err) => console.log(err));
    //the meat goes here
    setCredentials({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <h2>Login Component</h2>
      <form onSubmit={login}>
        <input
          value={credentials.username}
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <input
          value={credentials.password}
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
