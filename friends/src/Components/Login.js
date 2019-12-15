import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { login } from "../actions";
// import axiosWithAuth from "../utils/AxiosWithAuth";

import "semantic-ui-css/semantic.min.css";
import { Form, Input, Button } from "semantic-ui-react";

const Login = props => {
  console.log("login-props:", props);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
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
    <Form onSubmit={handleSubmit}>
      {props.isFetching && <p>loading...</p>}
      <h1>Login</h1>
      <Form.Field>
        <label>Username</label>
        <Input
          placeholder="Username"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </Form.Field>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login;
