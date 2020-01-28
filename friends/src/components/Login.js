import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    passwod: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('api/login', credentials)
      .then(res => {
          localStorage.setItem('token', res.data.payload);
          props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-form">
      <form data-testid="login-form" onSubmit={handleSubmit}>
          <input type='text' name='username' value={credentials.username} onChange={handleChange} />
          <input type='password' name='password' value={credentials.password} onChange={handleChange} />
          <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
