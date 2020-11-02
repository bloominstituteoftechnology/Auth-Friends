import React from "react";
import { Button, TextField, Container } from "@material-ui/core";
import axiosWithAuth from "../utill/axiosWithAuth";

export default class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friendslist");
      })
      .catch((err) => {
        console.log("Error is", err.response);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <TextField
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <TextField
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" type='submit'>
            Log In
          </Button>
        </form>
      </div>
    );
  }
}