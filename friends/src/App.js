import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendList from "./components/FriendList";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";

function App() {
  return (
    <AppDiv>
      <Router>
        <div>
          <h1>Friends!!</h1>
          <Link to="/login">Log In</Link>
          <Link to="/protected">Friends List</Link>
          <Switch>
            <ProtectedRoute path="/friends" component={FriendList} />
            <Route exact path="/protected" component={FriendList} />
            <Route path="/login" component={LoginForm} />
            <Route component={LoginForm} />
          </Switch>
        </div>
      </Router>
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  text-align: center;
  background-color: #e4572e;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 1 em;
  font-family: "Contrail One";
  h1 {
    margin-top: 1%;
    font-size: 4em;
  }
  a {
    font-size: 1.5em;
    padding: 5%;
    margin-bottom: 50%;
    text-decoration: none;
    color: black;
  }
`;
