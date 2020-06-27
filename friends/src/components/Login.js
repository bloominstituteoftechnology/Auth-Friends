import React from 'react';

import axios from 'axios';

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

  Login = e => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/api/login', this.state.credentials)

      .then(response => {
        console.log('Post Credentials', response);
        localStorage.setItem('token', response.data.payload);
        this.props.history.push('/Friends');
      })
      .catch();
  };

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <div className='formBody'>
        <h1 className='title'>Login</h1>
        <form onSubmit={this.Login}>
          <input
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder='UserName:'
          />
          <input
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder='Password:'
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
