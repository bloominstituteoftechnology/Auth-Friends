import React, { useState }from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";

const Login = props => {
  const[userCredentials, setUserCredentials] = useState({username:'', password:''})

  const handleChange = e => {
    setUserCredentials(
      {
        ...userCredentials,
        [e.target.name]: e.target.value
      }
    )
  }

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', userCredentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/myfriends')
    })
    .catch(err => console.error(err))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" value={userCredentials.username} onChange={handleChange} />
        <input type="password" name="password" value={userCredentials.password} onChange={handleChange} />
        <button> Log In </button>
      </form>
    </div>
  );
};

export default Login;
