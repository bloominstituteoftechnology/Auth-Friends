import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import lady from "../images/streetart.png";
import Logout from "./logout";


const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialValues);

  const history = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials)
  }

  const login = (e) => {
    console.log("Login working")
    console.log('credentials', credentials)
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log("resolved token", res);
        localStorage.setItem("authToken", res.data.payload);
        // redirect to logged in homepage
        history.push("/artists");
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="parallax-wrapperSeven" style={{marginTop: '80vh'}}>
      <div className="content" style={{ textAlign: "right" }}>
        <h1>アーティストディレクトリ</h1>
        <h5>- A R T I S T . D I R E C T O R Y -</h5>
        <img src={lady} alt="street number one" />
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-start flex-column"
          style={{ maxWidth: "20%", textAlign: "center" }}
        >
          <h2>ログインする</h2>
          <h5>- L O G I N -</h5>
          <TextField
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            variant="outlined"
            label="Username"
            margin="dense"
            color="primary"
            style={{ backgroundColor: "white" }}
          />
          <TextField
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            variant="outlined"
            label="Password"
            margin="dense"
            color="primary"
            style={{ backgroundColor: "white" }}
          />
          <Link to='artists' variant="contained" color="inherit" onClick={login}>
            <Button>Login</Button>
          </Link>
          <Logout />
        </form>
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ marginTop: "10rem", backgroundColor: "#222" }}
        >
          <h3>ストリートアート</h3>
          <h6>- S T R E E T A R T -</h6>
          <h6 style={{ lineHeight: "2" }}>
            Tokyo . Honolulu . Los Angeles . Seattle
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
