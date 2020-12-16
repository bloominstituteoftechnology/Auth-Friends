import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utilities/axiosWithAuth';


const initialCredentials = {
    credentials: { username: "", password: "" },
    error: "",
  };

  const Login = () => {
    const [state, setState] = useState(initialCredentials);

    const history = useHistory();

    const handleChange = (e) => {
      setState({
        ...state,
        credentials: {
          ...state.credentials,
          [e.target.name]: e.target.value,
        },
        error: "",
      });
    };

    const login = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .post("/api/login", state.credentials)
        .then((res) => {
          console.log(res);
          window.localStorage.setItem("token", res.data.payload);
          history.push("/friends");
        })
        .catch((err) => {
          setState({ ...state, error: err.response.data.error });
        });
    };

    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="text"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <input type="submit" />
        </form>
        <p> {state.error} </p>
      </div>
    );
  };

  export default Login; 