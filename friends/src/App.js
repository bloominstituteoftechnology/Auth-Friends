import React, { Component } from 'react';
import './App.css';
import { fetchFriends, createFriend } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    friends: ""
  };

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends List</h1>
        </header>
        <input
          type="text"
          placeholder="friend"
          name="friend"
          value={this.state.friend}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          onClick={() => this.props.createFriend({ friend: this.state.friend })}
        >
          Add Friend
        </button>
        <ul>
          {this.props.friends.map(friend => <li key={friend}>{friend}</li>)}
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

export default connect(mapStateToProps, {fetchFriends, createFriend})(App);
