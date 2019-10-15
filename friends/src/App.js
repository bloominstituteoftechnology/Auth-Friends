import React, { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

// COMPONENTS
import Login from "./components/Login";

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
    
  }
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
