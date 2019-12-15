import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";
// import axiosWithAuth from "../utils/AxiosWithAuth";

import "semantic-ui-css/semantic.min.css";
import { Form, Input, Button } from "semantic-ui-react";

class Login extends React.Component {
  state = {
    credentials: { username: "", password: "" }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/friends"));
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.props.isFetching && <p>loading...</p>}
        <h1>Login</h1>
        <Form.Field>
          <label>Username</label>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { login })(Login);
