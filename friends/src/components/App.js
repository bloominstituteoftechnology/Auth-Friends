import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <h1>My Friends</h1>
        {this.props.friends ? (
          <FriendsList friends={this.props.friends} />
        ) : (
          <p> You have no friends.</p>
        )}
        <p> Add a friend? </p>
        <AddFriend />
      </div>
    );
  }
}

mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
});

export default connect(
  mapStateToProps,
  {
    fetchData,
  }
)(App);
