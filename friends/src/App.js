import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";
import { fetchFriends } from "./actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: null,
      email: ""
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Welcome to Redux-Friends!</h1>
        <FriendsList friends={this.props.friends} />
        <Form
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleInputChange={this.handleInput}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
