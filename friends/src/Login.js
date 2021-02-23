import React, { useState } from "react";

export const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      [name]: value,
    });
  };

  return (
    <div>
      <label>
        username
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
