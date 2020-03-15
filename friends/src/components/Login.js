import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
function Login(props) {
  console.log(props);
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

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <labe>Username:</labe>
      <input
        name="username"
        onChange={handleChange}
        type="text"
        value={credentials.username}
      />
      <label>Email</label>
      <input
        name="password"
        onChange={handleChange}
        type="text"
        value={credentials.password}
      />
      <button>Submit</button>
    </form>
  );
}

export default Login;
