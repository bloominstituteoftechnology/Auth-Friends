import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        console.log("success: ", res);
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
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
      {error.length > 0 ? (
        <p className="errorMessage">Incorrect username or password</p>
      ) : null}
    </div>
  );
};

export default Login;
