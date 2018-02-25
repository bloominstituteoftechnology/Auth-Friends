import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FriendList from "./components/FriendList";
import { connect } from "react-redux";
import { fetchFriends } from "./actions/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <h2>A list of my Friends</h2>
        {this.props.error ? <h3>Error fetching Friends</h3> : null}
        {this.props.fetchingFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <FriendList friends={this.props.friends} />
        )}
      </div>
    );
  }
} // App Component

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    fetchingFriends: friendsReducer.fetchingFriends
  };
};

export default connect(mapStateToProps, { fetchFriends })(App);
