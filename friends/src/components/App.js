import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "../styles/App.css";

import { getFriends } from "../actions";
import NewFriendForm from "./NewFriendForm";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <NewFriendForm />
        {this.props.fetching ? (
          <img src={logo} className="app-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return (
                <li key={friend.name}>
                  Name: {friend.name} Age: {friend.age} email: {friend.email}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    friends: state.friends,
    error: state.error
  };
};

export default connect(mapStateToProps, { getFriends })(App);
