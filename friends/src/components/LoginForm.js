import React from "react";
import axiosWithAuth from "./axiosAuth";
import styled from "styled-components";

class LogInForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    isFetching: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  login = e => {
    e.preventDefault();
    this.setState({
      isFetching: true
    });
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <FormDiv>
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
          <StyledButton> Log In </StyledButton>
          {this.state.isFetching && "logging in"}
        </form>
      </FormDiv>
    );
  }
}

export default LogInForm;
const FormDiv = styled.form`
  background: #29335c;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 5em;
  max-width: 250px;
  padding: 15px;
  margin: 16px auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background: #a4a89f;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 0.75em;
  border: none;
  border-radius: 3px;
`;
