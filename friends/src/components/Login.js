import React from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

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

     /*
    1. connect to server with username/passowrd
    2. store the token that gets passed on successful login
    3. output an error when we have an unsuccessful login
  */

  login = e => {
      e.preventDefault();
    //   login to server for token
    axiosWithAuth()
        .post("http://localhost:5000/api/login", this.state.credentials)
        .then((res) => {
            console.log('ab: Login.js: login: res:', res);
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friendlist');
        })
        .catch((err) => {
            console.error(err.response)
        })
  };

  render() {
      return (
          <div className="form">
              <header>
                  <h1>Login !</h1>
              </header>
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
                <button> Log In</button>
              </form>
          </div>
      );
  }
}

export default Login;