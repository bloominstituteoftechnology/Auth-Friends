import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "./utils/axiosWithAuth";

export const Login = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    loggedIn: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   if (token) {
  //     setState({
  //       ...state,
  //       loggedIn: true,
  //     });
  //     props.history.push("/");
  //   }
  // }, []);

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
        props.history.push("/friendslist");
      })
      .catch((err) => setError(err.message));
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
