import React, { useState } from "react";
import axiosWithAuth from "../Axios/axiosWithAuth";

const Login = props => {
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", creds)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/myFriendsList");
        console.log(res.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter user name"
          name="username"
          value={creds.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={creds.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
