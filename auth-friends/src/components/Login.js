import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button } from "reactstrap";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const submitLogin = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch(err => {
        localStorage.removeItem("token");
        console.log("invalid login ", err);
      });
  };

  return (
    <div className="login">
      <form onSubmit={submitLogin}>
        <input
          type="text"
          placeholder="enter a username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter a password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button color="warning">Log In</Button>
      </form>
    </div>
  );
};

export default Login;