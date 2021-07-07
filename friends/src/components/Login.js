import React, { useState } from "react";
import axios from "axios";

const initialState = {
  username: "Lambda School",
  password: "i<3Lambd4",
  //   { username: 'Lambda School', password: 'i<3Lambd4' }
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialState);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log("we made it");
        window.localStorage.setItem("token", res.data.payload); //?
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />{" "}
        </label>
        <br /> <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />{" "}
        </label>
        <br /> <br />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
