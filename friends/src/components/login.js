import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Nav from "./nav";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
    };
  }

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("new", this.state.credentials);
    axiosWithAuth()
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friends");
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChanges}
            name="username"
            placeholder="name"
          />
          <br />
          <input
            type="password"
            onChange={this.handleChanges}
            name="password"
            placeholder="password"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
