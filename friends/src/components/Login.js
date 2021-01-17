import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth"


const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login =e=>{
    e.preventDefault();
    setCredentials({username:"",password:""})
   
   axiosWithAuth()
   .post('/login',credentials)
    .then(res =>{
      window.localStorage.setItem('token',res.data.payload)
      props.history.push("/protected")
    })
    
  }


  return (
    <div className="login-card">
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
