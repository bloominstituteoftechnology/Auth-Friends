import React from "react";
import "./App.css";
import Login from "./components/Login";
import Friends from './components/Friends';
import PrivateRoute from './privateRoutes';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { axiosWithAuth } from "./utility/axiosWithAuth";
import Friend from "./components/Friend";
function App() {
  const logout = () => {
    axiosWithAuth()
      .post("/logout")
      .then((res) => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log("Axios logout error", err.message);
      });
  };
  return (
    <Router>
      <nav>
        <Link to="/">Login</Link>
        <Link onClick={logout} to="/logout">
          Logout
        </Link>
        <Link to="/friends">Friends</Link>
      </nav>
      <div className="App">
        <Switch>
          <PrivateRoute exact path='/friends' component={Friends}/>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
