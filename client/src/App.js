import React from "react";
import './App.css';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";


function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <PrivateRoute exact path="/friends" component={FriendsList} />
      </Switch>
    </div>
    </>
  );
}

export default App;
