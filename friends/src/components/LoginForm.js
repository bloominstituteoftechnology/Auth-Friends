import React, { useState } from "react";
import axios from "axios";

const LoginForm = props => {
  console.log("loginform props:", props);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => {
    e.preventDefault();
    setForm({ ...form, [e.target.form]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", form)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.error(err.response));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="username"
          value={form.username}
        />
        <input
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="password"
          value={form.password}
        />
        <button onClick={login}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
