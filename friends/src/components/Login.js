import React, { useState } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';

import axios from "axios";
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      background: 'white',
      opacity: ".6",
      borderRadius: 3,
    },
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 56,
    padding: '0 30px',
  }
}));

// * The login function should save the returned token to localStorage. 
//You can setup `isLoading` state in your Login component, and 
//show a spinner on your form or in your button while the login request is happening.
// skelton screen alternative


// * The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.
const initialCredentialValue = {
  username: "",
  password: ""
}

const Login = () => {
  const classes = useStyles();

  const [credentials, setCredentials] = useState(initialCredentialValue);

  const history = useHistory();

  const handleChange = e => {
    const userLoginInfo = {...credentials, [e.target.name]: e.target.value}
    setCredentials(userLoginInfo);
  };

  const doLogin = () => {
    console.log("doLogin fired")
    console.log("credentials: ", credentials)
    axios.post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("authToken", res.data.payload);
      // redirect to logged in homepage
      history.push("/protected");
    })
    .catch(err => console.log(err));
  }

  const handleSubmit = (e) => {
    console.log("handleSubmit fired")
    e.preventDefault();
    doLogin(credentials);
  };

return (
  <div className="login-container">
    
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField 
        id="username" 
        label="Username" 
        variant="filled" 
        name="username" 
        value={credentials.username} 
        onChange={handleChange}
      />
      <TextField 
        id="password" 
        label="Password" 
        variant="filled" 
        name="password" 
        value={credentials.password} 
        onChange={handleChange}
      />
      <Button 
        variant="contained" 
        className={classes.button} 
        size="large"
        type="submit"
      >
        Login
      </Button>
    </form>

  </div>
)
};

export default Login;

