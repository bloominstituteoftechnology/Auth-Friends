import React, { useState } from "react";
import { Button } from "antd";

function Login() {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(creds);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <br />
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={creds.username}
        />
        <br />
        <label htmlFor="username">Password: </label>
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={creds.password}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
