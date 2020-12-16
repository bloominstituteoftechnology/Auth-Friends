import React, { useState } from "react";
import { axiosWithAuth } from "../utility/axiosWithAuth";
const initialValues = [{
    credentials:{
        username:'',
        password:''
    }
}]
const Login = (props) => {
  const [credentials, setCredentials] = useState(initialValues);
  console.log(credentials);
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      credentials: {
        [e.target.name]: e.target.value,
      },
    });
  };

  const login = (e) => {
    axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        console.log(res.data.paylaod);
      })
      .catch((err) => {
        console.log("Axios login post error", err.message);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
