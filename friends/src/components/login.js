import React from "react";
import { connect } from "react-redux";

import { login } from "../actions/login";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "i<3Lambd4"
    }
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      credentials: {
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    event.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    return (
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
          <button>Log In</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ loggingIn, error }) => ({ error, loggingIn });
export default connect(
  mapStateToProps,
  { login }
)(Login);
