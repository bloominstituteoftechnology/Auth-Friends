import React, { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

const Login = props => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", userData)
      .then(response => {
        console.log("Successful Login", response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
        console.log("Login failed", userData.username, userData.password);
      });
  };

  return (
    <form name="login" className="login">
      <label htmlFor="username">
        Username:
        <input
          required //why aren't these working??
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          required //why aren't these working??
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Button color="info" name="submit" onClick={handleSubmit}>
        Log in
      </Button>
    </form>
  );
};

export default Login;
