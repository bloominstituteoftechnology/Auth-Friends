import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    email: ""
  });
  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="text"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  );
}

export default Login;
