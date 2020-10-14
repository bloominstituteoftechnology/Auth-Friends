import React, { useState } from "react";
import axios from "axios"

const initialCredentials = {
    username: "",
    password: ""
}

const Login = function() {

    const [ credentials, setCredentials ] = useState(initialCredentials)

    const loginFunction = e => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", credentials)
        .then(res => {
            // console.log(res)
            window.localStorage.setItem("token", res.data.payload)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChange = (e) => {
        setCredentials ({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
      <p>Login Page</p>
      <form onSubmit={loginFunction} >
        <span>Username: </span>
        <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        <br />
        <span>Password: </span>
        <input type="password" name="password" value={credentials.password} onChange={handleChange}/>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
