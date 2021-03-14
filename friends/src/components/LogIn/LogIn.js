import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./logIn.styles.css";

function LogIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = (event) => {
    event.preventDefault();
    setLoading(!loading);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("authToken", res.data.payload);
        history.push("/friends-list");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div>
                  <h3 className="login-heading mb-4">Welcome back friend!</h3>
                  <form onSubmit={login}>
                    <div className="form-label-group">
                      <input
                        name="username"
                        type="text"
                        id="inputUsername"
                        className="form-control"
                        placeholder="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                        autoFocus
                      />
                      <label for="inputUsername">Username</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        name="password"
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                      <label for="inputPassword">Password</label>
                    </div>
                    {loading === true ? (
                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2">
                        <i class="fa fa-spinner fa-spin"></i>Loading
                      </button>
                    ) : (
                      <button
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
