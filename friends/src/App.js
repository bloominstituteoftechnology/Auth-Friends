import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import FriendsList from "./components/FriendsList";
import CreateFriendForm from "./components/CreateFriendForm";
import { fetchFriends, addFriend } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addToFriends = e => {
    e.preventDefault();
    this.props.addFriend({
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.setState({ name: "", age: "", email: "" });
  };
  render() {
    return (
      <div className="app">
        <h1>Welcome to Redux-Friends!</h1>
        <div className="appComponents">
          <FriendsList friends={this.props.friends} />
          <CreateFriendForm
            name={this.state.name}
            age={this.state.age}
            email={this.state.email}
            handleInput={this.handleInput}
            addToFriends={this.addToFriends}
          />
        </div>
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
  { fetchFriends, addFriend }
)(App);
