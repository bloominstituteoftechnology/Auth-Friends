import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends, addFriend } from "./actions";

import "./App.css";

import FriendList from "./components/FriendList";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAddFriend = event => {
    event.preventDefault();
    this.props.addFriend(this.state.newFriend)
    this.setState({
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    })
  }

  render() {
    return this.props.isFetching ? (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    ) : (
      <div className="App">
        <FriendList friends={this.props.friends} />
        <Form newFriend={this.state.newFriend} handleChange={this.handleChange}
        handleSubmit={this.handleAddFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetching: state.isFetching,
    error: state.error,
    addingFriend: state.addingFriend,
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend }
)(App);
