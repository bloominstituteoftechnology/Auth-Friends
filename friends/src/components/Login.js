import React, { useState } from "react";

import axios from "axios";

const Login = props => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", creds)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h1>Login Here</h1>

      <form onSubmit={handleSubmit}>
        <h2>Username: </h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <h2>Password: </h2>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
