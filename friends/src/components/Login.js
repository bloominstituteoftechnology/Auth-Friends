import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/friendsActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    this.props
      .login(username, password)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { username, password } = this.state;
    const { loggingIn, error } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className='login-form'>
        {error && <p className='error'>{error}</p>}
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={this.handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Placeholder'
          value={password}
          onChange={this.handleChange}
        />
        {loggingIn ? (
          <p>Logging in...</p>
        ) : (
          <button type='submit'>Login</button>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error
});

const mapDispatchToProps = {
  login
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
