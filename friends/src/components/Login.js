import React, { useState } from "react";

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
