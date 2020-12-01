import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
      <h2>Login Component</h2>
      <form>
        <input
          value={credentials.username}
          name="username"
          placeholder="Enter Username"
        />
        <input
          value={credentials.password}
          name="password"
          placeholder="Enter Password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
