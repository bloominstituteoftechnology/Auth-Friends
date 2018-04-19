import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchFriends, createFriend } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    friend: ""
  };
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        {this.props.pending ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          type="text"
          placeholder="friend"
          name="friend"
          value={this.state.friend}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.createFriend({ friend: this.state.friend });
            this.setState({ friend: "" });
          }}
        >
          Add Friend
        </button>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        <ul>
          {this.props.friends.map(friend => (
            <li key={friend.id}>{friend.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  };
};

export default connect(mapStateToProps, { fetchFriends, createFriend })(App);
