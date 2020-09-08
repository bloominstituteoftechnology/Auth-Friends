import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        history.push('/api/friends');
      })
      .catch((err) => {
        console.log('login function ERROR: ', err);
      })
  };

  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor='username'>Username: </label>
        <input
          type='text'
          name='username'
          id='username'
          value={credentials.username}
          onChange={onChange}
        />
        <br />
        <label htmlFor='password'>Password: </label>
        <input
          type='password'
          name='password'
          id='password'
          value={credentials.password}
          onChange={onChange}
        />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;