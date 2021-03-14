import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '', 
      password: ''
    }
  }


  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }}
    )
  }

  FormReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = ""))
  }

  login = e => {
    e.preventDefault()
      axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('authToken', res.data.payload)
          this.FormReset()
      })
      .catch(err => console.log(err))
        this.FormReset()
    }

  render() {
    return (
      <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder='enter username'
            style={{marginRight: '5px'}}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder='enter password'
            style={{marginRight: '5px'}}
          />
          <button className='login-button'>Sign In</button>
        </form>
      </div>
    )
  }
}

export default Login;