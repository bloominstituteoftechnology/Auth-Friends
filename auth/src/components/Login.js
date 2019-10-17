import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import "../Login.css";
import Logo from "../mischief.jpg";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {useAuth} from '../context/auth';

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  

  function postLogin() {
    let loginURL = 'http://localhost:5000/api/login';
    axios.post(loginURL, {
      username,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/add" />;
  }

  function handleSubmit(e){
    e.preventDefault();
  };



  return (
    
    <div className="Login">
    <img src={Logo} className="logo" alt=""/>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel>username</FormLabel>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setusername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" onClick={postLogin}>
          Login
        </Button>
        { isError &&<p>Come on, man. You forgot your login details? Again</p> }
      </form>
    </div>
  );
};

export default Login;