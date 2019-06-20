import React from "react";
import { Link, Redirect } from "react-router-dom";
import { isLoggedIn } from "../withAuth/services";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from "../../actions";
const LoginForm = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  width: 350px;
  height: 500px;
`;

const TextInput = styled.input`
  margin: 25px;
  width: 75%;
  height: 25px;
  border: none;
  border-bottom: 2px solid black;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: none;
`;

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  Login = async () => {
    await this.props.login(this.state.email, this.state.password);
    this.props.history.push("/home");
  };

  textFormHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount = () => {
    if (isLoggedIn()) {
      this.props.history.push("/home");
    }
  };
  render() {
    if (isLoggedIn()) {
      this.props.history.push("/home");
    }
    return (
      <LoginForm>
        <h1>Login Here</h1>
        <TextInput
          type="text"
          name="email"
          placeholder="email/username"
          value={this.state.email}
          onChange={this.textFormHandler}
        />

        <TextInput
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.textFormHandler}
        />
        <Button onClick={this.Login}>Login</Button>
      </LoginForm>
    );
  }
}
const mapStateToProps = state => {
  return {
    isloadingLOGIN: state.isloadingLOGIN,
    successLOGIN: state.successLOGIN,
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
