import React from "react";
import axios from 'axios';

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
    // console.log(this.state.credentials);
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder= "Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder= "Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;