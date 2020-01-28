import React from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
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
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login} style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly', height: '200px', alignItems: 'center'}}>
        <TextField
          id="username-input"
          label="Username"
          type="username"
          name="username"
          value={this.state.credentials.username}
          onChange={this.handleChange}
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          name="password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />
          <Button
          variant="contained"
          color="primary"
          type="submit"
          >
            Log in
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;