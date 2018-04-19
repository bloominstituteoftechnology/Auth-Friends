import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchFriend, createFriend } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    friend: ''
  };
  componentDidMount() {
    this.props.fetchFriend();
  }
  render() {
    return (
      <div className="App">
        {this.props.pending ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
          <h1 className="App-title">Friends</h1>
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
            this.setState({ friend: '' });
          }}
        >
          Add a Friend
        </button>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
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

export default connect(mapStateToProps, { fetchFriends, createFriend })(App);