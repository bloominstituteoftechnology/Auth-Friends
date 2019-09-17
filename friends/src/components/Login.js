import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./AxiosAuth";
import {Input, Button} from 'semantic-ui-react';

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axiosWithAuth()
        .get("friends")
        .then(res => {
          props.setLogged(false);
          props.history.push("/friends");
        })
        .catch(err => {
          localStorage.setItem("token", null);
          props.setLogged(true);
          setDisplay(true);
        });
    } else {
      setDisplay(true);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.setLogged(false);
        props.history.push("/friends");
      })
      .catch(err => {
        props.setLogged(true);
        console.log("ERROR", err);
      });
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      {display && (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Enter username"
            value={user.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />
          <Button>Submit</Button>
        </form>
      )}
    </div>
  );
};

export default Login;
