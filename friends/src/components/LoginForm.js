import React, { useState } from "react";

const LoginForm = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  function handleChanges(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.submitUser(user);
      }}
    >
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChanges}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChanges}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
