import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import {axios} from "../utils/axioswithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", credentials)
      .then((res) => {
        console.log(res);
        //res.data.payload
        localStorage.setItem("token", res.data.payload);
        history.push('/friends')
      })
      .catch((err) => console.log('Error:', err));
  };

  return (
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
      <button type='submit'>Log In</button>
    </form>
  );
};

export default Login;
