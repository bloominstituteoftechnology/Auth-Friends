import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    const newFormData = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", form)
      .then((res) => {
        console.log("SV: Login: handleSubmit: res", res);
        localStorage.setItem("token", res.data.payload);
        history.push("/friendslist");
      })
      .catch((err) => {
        console.log("SV: Login: handleSubmit: form", form);
      });
  };
  return (
    <div>
      <h2>Please Sign in!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          username:
          <input
            type="text"
            name="username"
            placeholder="username"
            value={form.username}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            type="password"
            name="password"
            placeholder="password"
            value={form.password}
            onChange={handleChanges}
          />
        </label>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
