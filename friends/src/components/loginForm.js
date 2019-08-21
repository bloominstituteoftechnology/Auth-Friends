import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Form, FormInput, FormGroup, Button, Container } from "shards-react";

class LoginForm extends React.Component {
  state = {
    credentails: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentails: {
        ...this.state.credentails,
        [e.target.name]: e.target.value
      }
    });
  };
  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentails).then(res => {
      if (res) {
        this.props.history.push("/protected");
      }
    });
  };
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <FormInput
              text="text"
              name="username"
              value={this.state.credentails.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput
              text="text"
              name="password"
              value={this.state.credentails.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </FormGroup>
          <Button onClick={this.login}>Login</Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});
export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
