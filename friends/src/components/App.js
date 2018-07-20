import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Friends';
import FriendForm from './FriendForm';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
      <header>
          <h1>{`Michael's Friend Tracker`}</h1>
          <FriendForm />
        </header>
        {this.props.error ? <h3>Error Fetching</h3> : null}
        <div>
          {this.props.fetchFriends ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Friends friends={this.props.friends} />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { friendReducer } = state;
  return {
    friends: friendReducer.friends,
    error: friendReducer.error,
    fetchingFriends: friendReducer.fetchingFriends
  };
};

export default connect(mapStateToProps, { fetchFriends })(App);
