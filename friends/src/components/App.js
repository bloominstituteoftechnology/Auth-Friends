import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.css";
import { fetchingData } from "../actions/index";
import CreateFriend from "./createFriend";
import UpdateFriend from './updateFriend';

class App extends Component {
  componentDidMount() {
    this.props.fetchingData();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingFriends ? (
          <h2>Fetching Friends</h2>
        ) : (
          <div>
            <h2>My Friend </h2>
            <CreateFriend />
            <ul>
              {this.props.friends.map(friend => {
                return (
                  <div className="friends-list">
                    <p key={friend.id}>Name: {friend.name}</p>
                    <p key={friend.id}> Age: {friend.age}</p>
                    <p key={friend.id}> Email: {friend.email}</p>
                    <UpdateFriend />
                  </div>
                );
              })}
            </ul>
          </div>
        )}
        {this.props.error !== null ? <div> {this.props.error}</div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchingData }
)(App);
