import React, { useState, useEffect } from "react";
import axiosWithAuth from "../auth/axiosWithAuth";

export default (props) => {
  const [creds, setCreds] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    console.log("");
  });

  const handleChange = (e) => {
    setCreds({
      ...creds,
      credentials: {
        ...creds.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", creds.credentials)
      .then((res) => {
        let token = res.data.payload; // JWT
        window.localStorage.setItem("token", token);
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!window.localStorage.getItem("token") ? (
        <div>
          <h1>Login Page homie</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={creds.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="password"
              value={creds.password}
              onChange={handleChange}
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
      ) : (
        props.history.push("/")
      )}
    </>
  );
};

