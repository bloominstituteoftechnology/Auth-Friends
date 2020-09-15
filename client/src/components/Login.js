import React, { useState } from "react";
import { axiosWithAuth } from "../utils";

function Login() {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState(false);

  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(creds);
    axiosWithAuth()
      .post("/api/login", creds)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => {
        setErrors(true);
      });
  };
  return (
    <div className="login">
      <h2>Login</h2>
      {errors && <p>There was an error with your information</p>}
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
