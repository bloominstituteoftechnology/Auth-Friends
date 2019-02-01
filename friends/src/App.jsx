import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, addFriend, deleteFriend } from "./actions";
import FriendsForm from "./components/FriendsForm";
import FriendsList from "./components/FriendsList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <FriendsList
            getData={this.props.getData}
            friends={this.props.friends}
            deleteFriend={this.props.deleteFriend}
          />
        </div>
        <div className="form-div">
          <FriendsForm
            getData={this.props.getData}
            addFriend={this.props.addFriend}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { getData, addFriend, deleteFriend }
)(App);
