import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./AxiosAuth";

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
        .get("http://localhost:5000/api/friends")
        .then(res => {
          props.history.push("/friends");
        })
        .catch(err => {
          localStorage.setItem("token", null);
          setDisplay(true);
        });
    } else{
      setDisplay(true);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => {
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
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Login;
