import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";

import Login from "./components/Login";
import Friends from "./components/Friends";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

//Token verification function, might place elsewhere and export
const verifyToken = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

//verifyToken returns truthy or falsey val and updates state on initial render

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(verifyToken());
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {isLoggedIn ? <Redirect to="/friends" /> : <Redirect to="/login" />}
          <Switch>
            <PrivateRoute
              exact
              path="/friends"
              component={Friends}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/sign-up" render={(props) => <SignUp {...props} />} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
