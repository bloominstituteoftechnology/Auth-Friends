import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formState)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");
      })
      .catch((err) => console.error(err));
    setFormState({
      ...formState,
      username: "",
      password: "",
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="username"
        className="username"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        name="password"
        className="password"
        value={formState.password}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

export default Login;
