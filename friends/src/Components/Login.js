import React, { useState } from "react";
import axios from "axios";

const initialState = {
  credentials: {
    username: "",
    password: ""
  }
};

export default function Login(props) {
  const [credentials, setCredentials] = useState(initialState);

  const onChange = e => {
    setCredentials({
      ...initialState,
      credentials: { ...credentials, [e.target.name]: e.target.value }
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            value={credentials.username}
            onChange={onChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            type="text"
            placeholder="password"
            value={credentials.password}
            onChange={onChange}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
