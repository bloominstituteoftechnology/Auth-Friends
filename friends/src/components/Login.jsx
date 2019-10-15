import React from "react";

export default function Login({
  loginCredentials,
  onTypeLoginCredentials,
  onSubmitLoginForm
}) {
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
      <button onClick={onSubmitLoginForm}>Login</button>
    </form>
  );
}
