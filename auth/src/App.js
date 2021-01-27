import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import GetFriends from "./Components/GetFriends";
import PrivateRoute from "./Utility/PrivateRoute";
import { axiosWithAuth } from "./Utility/axiosWithAuth";

function App() {
  const logout = () => {
    axiosWithAuth()
      .post('http://localhost:5000/api/logout')
      .then((res) => {
        localStorage.removeItem("token");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("Logout error", err);
      });
  };
  return (
    <div className="App">
      {localStorage.getItem("token") && (
        <Link to="/getfriends">Protected Page</Link>
      )}
      <Link onClick={logout}> Logout</Link>
      <Switch>
        <PrivateRoute exact path="/getfriends">
          <GetFriends />
        </PrivateRoute>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
