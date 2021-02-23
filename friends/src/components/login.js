import React, { useState } from "react";
import axios from "axios";
export function Login(props) {
  const credentialValues = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(credentialValues);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
        console.log(res, "axios post");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={login}>
        <h1>Login below</h1>
        <label>
          Username:
          <input
            type="text"
            placeholder="enter a username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            placeholder="enter a password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button>Log in</button>
      </form>
    </div>
  );
}
export default Login;
