import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import AddFriendForm from "./components/AddFriendForm";
import Dashboard from "./components/Dashboard";
import Friend from "./components/Friend";

function App(props) {
  console.log("Props in the App component: ", props);
  return (
    <div className="App">
      <NavBar />
      {/* The path goes with the <PrivateRoute /> , the props go in the child component */}
      <PrivateRoute exact path="/dashboard/friends/:id">
        <Friend />
      </PrivateRoute>
      <PrivateRoute exact path="/dashboard/add_friend">
        <AddFriendForm />
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>{" "}
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    loading: state.loading,
  };
};
export default connect(mapStateToProps, {})(App);
