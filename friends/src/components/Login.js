import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";

class Login extends React.component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.ListeningStateChangedEvent({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;