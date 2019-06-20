import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';

import { login } from '../actions';

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
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push('/protected');
      }
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
          <button>
            {this.props.loggingIn ? (
              <h2>loading</h2>
            ) : (
              'Log in'
            )}
          </button>
        </form>
      </div>
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
)(Login);
