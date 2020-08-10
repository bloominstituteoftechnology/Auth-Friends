import React from "react";
// import axios from 'axios';

// we are replacing axios with the axiosWithAuth
import { axiosWithAuth } from "../utilities/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    /*  Make a POST request and send the credtials object to API */
    axiosWithAuth() // we changed axios with axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        // token is a eagle13 string
        window.localStorage.setItem("token", res.data.payload);
        // navigateteh user to /protect or whatever landing page)
        this.props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
