import React, { Component } from 'react';

export default class Login extends Component {
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
    return <div />;
  }
}
