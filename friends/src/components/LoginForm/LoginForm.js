import React, { useState } from "react";
import styles from "./LoginForm.module.scss";

const LoginForm = ({ onLoginSubmit }) => {
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={styles.FormContainer}>
      <form onSubmit={onLoginSubmit} className={styles.Form}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
