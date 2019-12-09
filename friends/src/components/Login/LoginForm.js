import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import axiosWithAuth from '../../utils/axiosWithAuth';

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({ username: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
        window.location.reload(false);
      })
      .catch(err => console.log(err));
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }
  return (
    <>
    {isLoading ? ( 'Loading...' ) : (
      <Form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <Form.Field>
          <label>Username</label>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    )}
    </>
  )
}


export default LoginForm;