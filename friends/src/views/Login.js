import React from "react";
import LoginForm from "Components/LoginForm/LoginForm";
import axios from "axios";

const handleLogin = ({ username, password }) => {
  axios;
};

const Login = () => (
  <div>
    <h1>Log in to see your friends</h1>
    <LoginForm onLoginSubmit={handleLogin} />
  </div>
);

export default Login;
