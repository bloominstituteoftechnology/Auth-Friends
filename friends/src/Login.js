import React, { useState } from "react";

import { axiosWithAuth } from "./utils/axiosWithAuth";

export const Login = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", state)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        setLoading(false);
        props.history.push("/protected");
      })
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        username
        <input
          type="text"
          name="username"
          value={state.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        password
        <input
          type="password"
          name="password"
          value={state.password || ""}
          onChange={handleChange}
        />
      </label>
      <p style={{ color: "red" }}>{error}</p>
      {loading && error.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <button>Login</button>
      )}
    </form>
  );
};
