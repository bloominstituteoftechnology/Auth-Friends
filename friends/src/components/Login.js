import React, { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log("user data for", userData.username, userData.password);
  };

  return (
    <form name="login" className="login">
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>

      <button name="submit" onClick={handleSubmit}>
        Log in
      </button>
    </form>
  );
};

export default Login;
