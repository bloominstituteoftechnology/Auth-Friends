
import React, { useState } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    loginInfo: {
      username: "",
      password: "",
    },
    isLoading:false,
  });

  const history = useHistory();

  const handleChange = (e) => {
    setUser({
      loginInfo: {
        ...user.loginInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", user.loginInfo)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        history.push("/friendslist");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className= "login-form">
      <form onSubmit={login}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={user.loginInfo.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <label>Password:</label>
        <input
          placeholder="Enter Password"
          type="password"
          name="password"
          value={user.loginInfo.password}
          onChange={handleChange}

        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login; 