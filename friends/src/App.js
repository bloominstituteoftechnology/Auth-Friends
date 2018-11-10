import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import CreateFriendForm from "./components/CreateFriendForm";
import FriendsList from "./components/FriendsList";
import { fetchingFriends } from "./action/action";

class App extends Component {
  componentDidMount() {
    this.props.fetchingFriends();
  }

  render() {
    return (
      <div className="App">
        <h1>People I Can Have Coffee With</h1>
        <CreateFriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { fetchingFriends }
)(App);
