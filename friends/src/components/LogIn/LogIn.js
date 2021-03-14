import React, { useState } from "react";
import axios from "axios";

import "./logIn.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LogIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = (event) => {
    setLoading(!loading);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("authToken", res.data.payload);
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
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
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
                        type="text"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                      <label for="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheck1"
                      >
                        Remember password
                      </label>
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
