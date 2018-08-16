import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchData, addFriend} from "../actions";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  addFriend = (friend) => {
    this.props.addFriend(friend)
  }

  render() {
    console.log(this.props.friends)
    return (
      <div className="App">
        <h1>My Friends</h1>
        {this.props.friends.fetchingData ? 
          (<p> hold up ur friends are coming </p>)
         : (
          <FriendsList friends={this.props.friends} />
        )}
        <p> Add a friend? </p>
        <AddFriend handleAddFriend={this.addFriend}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  fetchingData: state.friendsReducer.fetchingData
});

export default connect(
  mapStateToProps,
  {
    fetchData,
    addFriend
  }
)(App);
