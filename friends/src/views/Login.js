import React from "react";
import LoginForm from "Components/LoginForm/LoginForm";

const handleLogin = ({ username, password }) => {
  console.log(username, password);
};

const Login = () => (
  <div>
    <h1>Log in to see your friends</h1>
    <LoginForm onLoginSubmit={handleLogin} />
  </div>
);

export default Login;
