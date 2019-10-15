import React, { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";

// COMPONENTS
import Login from "./components/Login";
import withAuth from "./axios";
import Axios from "axios";

const initialLoginCredentials = {
  username: "",
  password: ""
};

function App() {
  const [loginCredentials, setLoginCredentials] = useState(
    initialLoginCredentials
  );

  const onTypeLoginCredentials = event => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value
    });
  };

  const onSubmitLoginForm = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", loginCredentials)
      .then(res => {
        debugger;
      })
      .catch(error => {
        debugger;
      });
    setLoginCredentials({
      username: "",
      password: "",
    });
  };
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <div>
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Login
                {...props}
                loginCredentials={loginCredentials}
                onTypeLoginCredentials={onTypeLoginCredentials}
                onSubmitLoginForm={onSubmitLoginForm}
              />
            );
          }}
        />
      </div>
    </div>
  );
}

export default App;
