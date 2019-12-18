import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isFecthing: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  Login = e => {
    e.preventDefault();
    this.setState({
      isFetching: true
    });
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        console.log(res);
        console.log(this.state.credentials);
        localStorage.setItem("token", res.data.payload);
        console.log(res.data.payload);
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <p>Enter your Username and Password</p>
          <form onSubmit={this.Login}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
