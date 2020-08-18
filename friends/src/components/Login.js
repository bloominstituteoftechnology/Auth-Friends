import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    // (username === 'Lambda School' && password === 'i<3Lambd4')
    e.preventDefault();

    //login are usually a post request
    axiosWithAuth() //having the headers being undefine is ok because it's not use
      .post("http://localhost:5000/api/login", this.state.credentials) //server needs to be listening on port :5000 for it to work. Npm start it on vs code, see server code on github: https://github.com/LambdaSchool/gasoline-server
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch((err) => {
        console.log("In axios error- " + err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            placeholder='Username'
            type="textarea"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            placeholder='Password'
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
