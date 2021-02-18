import React from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        hasRedirected: false,
        redirectMsg: ''
    };

    componentDidMount() {
        this.getRedirect();
    }

    getRedirect = () => {
        if (localStorage.getItem('redirect')) {
            this.setState({
                hasRedirected: true,
                redirectMsg: localStorage.getItem('redirect')
            });
        }
        return
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
                localStorage.setItem('token', res.data.payload)
                console.log('ab: Login.js: login: res:', res)
                this.props.history.push('/friendlist')
            })
            .catch((err) => {
                console.error(err.response)
            })
    };

  render() {
      return (
          <div className="form">
              {this.state.hasRedirected && (
                  <div className="redirect-msg">
                      <h3>{this.state.redirectMsg}</h3>
                  </div>
              )}
              <form onSubmit={this.login}>
                <header>
                    <h1 className="login-txt">Login !</h1>
                </header>
                <label htmlFor="username" className="username">
                    Username
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    </label>
                <label htmlFor="password" className="password">
                    Password
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                </label>
                <button> Log In</button>
              </form>
          </div>
      );
  }
}

export default Login;