// import e from 'express';
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {

  state = {
    credentials: {
      username: "",
      password: ""
    },
    error: 'Incorect login information'
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
       ...this.state.credentials,
       [e.target.name]: e.target.value
      },
      error: ""
    })
  }

  login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/FriendsList');
      })
      .catch(err => {
        console.log('login handler catch error', err)
        alert('Login handler error');
      })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.login}>
          <input 
            style={{"margin" : "10px"}}
            type="text"
            name="username"
            placholder="Username"

            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

          <input 
            style={{"margin" : "10px"}}
            type="password"
            name="password"
            placeholder="Password"

            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <p style={{ color: "red" }}>{this.state.error}</p>
      </div>
    )
  }
}

export default Login;