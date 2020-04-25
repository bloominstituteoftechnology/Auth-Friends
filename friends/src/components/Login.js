import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function Login() {
  const [credentialObject, setCredentialObject] = useState("");
  const [usernameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  useEffect(() => {
    setCredentialObject({
      ...credentialObject,
      username: usernameInput,
      password: passwordInput,
    });
  }, [usernameInput, passwordInput]);

  return (
    <form onSubmit={""}>
      <input
        type="text"
        name="username"
        value={usernameInput}
        onChange={(e) => {
          handleChange(e, setUserNameInput);
        }}
      />
      <input
        type="password"
        name="password"
        value={passwordInput}
        onChange={(e) => {
          handleChange(e, setPasswordInput);
        }}
      />
      <button>Log in</button>
    </form>
  );
}

export default Login;
