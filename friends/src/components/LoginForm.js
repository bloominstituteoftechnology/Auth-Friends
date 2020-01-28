import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Input, Button } from 'reactstrap';

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = evt => {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value
    });
  };

  const login = evt => {
    evt.preventDefault();
    setIsLoading(true);
    // in Redux, this would be in an action creator
    axiosWithAuth().post('/login', credentials)
      .then(res => {
        // console.dir(res);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }

  return (
    <>
    <h1>Log In</h1>
    <form onSubmit={evt => login(evt)}>
      <label>Username</label>
      <Input 
        type="text"
        placeholder="username"
        name="username"
        value={credentials.username}
        onChange={evt => handleChange(evt)}
        required
        autoFocus
      />
      <label>Password</label>
      <Input 
        type="password"
        placeholder="password"
        name="password"
        value={credentials.password}
        onChange={evt => handleChange(evt)}
        required
      />
      <Button color="primary" size="lg" type="submit">Log In</Button>
    </form>
    </>
  );
}

export default LoginForm;