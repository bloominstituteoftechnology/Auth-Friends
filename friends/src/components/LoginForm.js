import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { Input, Button, Spinner } from 'reactstrap';

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  let history = useHistory();

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
    setTimeout(() => {
      axiosWithAuth().post('/login', credentials)
      .then(res => {
        // console.dir(res);
        localStorage.setItem('token', res.data.payload);
        setIsLoading(false);
        history.push('/friends');
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
    }, 4000)
  }

  return (
    <>
    <h1>Log In</h1>
    <form onSubmit={evt => login(evt)}>
      <fieldset disabled={isLoading ? 'disabled' : null}>
    
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

      </fieldset>

      {!isLoading ? (<Button color="primary" size="lg" type="submit" className="btn-big">Log In</Button>) : (<Button color="secondary" size="lg" type="submit" disabled className="btn-big">
      <Spinner size="sm" />{' '}
        LOADING...
      </Button>)}
    </form>
    </>
  );
}

export default LoginForm;