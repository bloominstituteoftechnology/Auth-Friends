import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  function handleUsername(event) {
    setCredentials({
      ...credentials,
      username: event.target.value
    });
  }

  function handlePassword(event) {
    setCredentials({
      ...credentials,
      password: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(credentials);
    setCredentials({
      username: '',
      password: ''
    });
  }

  function login(credentials) {
    axios.post('http://192.168.1.211:5000/api/login', credentials).then(res => {
      localStorage.setItem('token', res.data.payload);
      props.loginCallback();
      props.history.push('/friends');
    });
  }

  return (
    <div>
      Login page
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleUsername}
          placeholder="username"
          value={credentials.username}
        />
        <input
          type="password"
          onChange={handlePassword}
          placeholder="password"
          value={credentials.password}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
