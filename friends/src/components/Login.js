import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  submitLogin = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitLogin} className="loginForm">
          <input type="text" name="username" />
          <input type="text" name="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
