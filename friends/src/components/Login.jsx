import React from "react";

export default function Login({ loginCredentials, onTypeLoginCredentials }) {
  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={loginCredentials.username}
          onChange={onTypeLoginCredentials}
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="password"
          value={loginCredentials.password}
          onChange={onTypeLoginCredentials}
        />
      </label>
      <button>Login</button>
    </form>
  );
}
