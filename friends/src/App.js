import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleLogin, handleLogout } from "./actions/index";
import FriendForm from "./components/FriendForm";
import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route
          path="/"
          render={props =>
            !this.props.token && (
              <LoginForm
                {...props}
                handleLogin={this.props.handleLogin}
                handleLogout={this.props.handleLogout}
              />
            )
          }
        />
        {this.props.token && (
          <div>
            <FriendForm /> <FriendsList />
          </div>
        )}
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  token: state.loginReducer.token
});

export default connect(
  mapStateToProps,
  { handleLogin, handleLogout }
)(App);
