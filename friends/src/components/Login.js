import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <div>Getting your friends!</div>;
  }

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");
      })
      .catch((err) => console.log("cannot login: ", err));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username123"
          id="username"
          name="username"
          value={credentials.username}
          onChange={changeHandler}
        />
        <label>Password</label>
        <input
          placeholder="password... shhhh"
          id="password"
          name="password"
          value={credentials.password}
          onChange={changeHandler}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
