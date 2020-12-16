import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  onChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              name="username"
              type="text"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.onChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.onChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
