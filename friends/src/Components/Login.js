import React, { Component, useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";


import "semantic-ui-css/semantic.min.css";
import { Form, Input, Button } from "semantic-ui-react";

const Login = props => {
  const [credits, setCredits] = useState({ username: "", pasword: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    AxiosWithAuth()
      .post("/login", credits)
      .then(res => {
        localStorage.setItem("localStorage token", res.data.payload);
        props.history.push("/friends");
        window.location.reload(false);
      })
      .catch(err => console.log("err", err));
  };

  const handleChange = e => {
    setCredits({ ...credits, [e.target.value]: e.target.value });
  };

  return (
    <div>
      {isLoading ? (
        "Loading...."
      ) : (
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Form.Field>
            <label>Username</label>
            <Input
              placeholder="Username"
              type="text"
              name="username"
              value={credits.username}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              placeholder="Password"
              type="text"
              name="password"
              value={credits.password}
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit">Login</Button>
        </Form>
      )}
    </div>
  );
};

export default Login;
