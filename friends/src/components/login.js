import React from "react";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import lady from "../images/streetart.png";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };
  
  handleChange = (e) => {
    //console.log("handle change is working", e);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    //console.log("login fired", e);
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        //console.log("Resolved Token Value", res.data.payload);
        localStorage.setItem("authToken", res.data.payload);
        // redirect to logged in homepage
        this.props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="parallax-wrapperSeven" style={{ marginTop: "80vh" }}>
        <div className="content" style={{ textAlign: "right" }}>
          <h1>アーティストディレクトリ</h1>
          <h5>- A R T I S T . D I R E C T O R Y -</h5>
          <img src={lady} alt="street number one" />
          <form
            onSubmit={this.login}
            className="d-flex justify-content-start flex-column"
            style={{ maxWidth: "20%", textAlign: "center" }}
          >
            <h2>ログインする</h2>
            <h5>- L O G I N -</h5>
            <TextField
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              variant="outlined"
              label="Username"
              margin="dense"
              color="primary"
              style={{ backgroundColor: "white" }}
            />
            <TextField
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              variant="outlined"
              label="Password"
              margin="dense"
              color="primary"
              style={{ backgroundColor: "white" }}
            />

            <Button onClick={this.login} style={{color: 'white', border: '.5px solid white'}}>Login</Button>
          </form>
          <div
            className="d-flex flex-column justify-content-between align-items-center"
            style={{
              minHeight: "10vh",
              backgroundColor: "#222",
              color: "white",
            }}
          >
            <div className="d-flex flex-column justify-content-between align-items-center">
              <h6 style={{ marginTop: "10rem" }}>- S T R E E T A R T -</h6>
              <h6 style={{ lineHeight: "2" }}>
                Tokyo . Honolulu . Los Angeles . Seattle
              </h6>
              <h3>ストリートアート</h3>
            </div>
            <div>
              <h6>Contact us: tony.miller@blackthought.tech</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
