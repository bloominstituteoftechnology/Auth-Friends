import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Friends';
import FriendForm from './FriendForm';
import { fetchFriends } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">{`G-Posse`}</h1>
          <FriendForm />
        </header>
        {this.props.error ? <h3>Error Fetching Friends</h3> : null}
        <div className="Flex-Container">
          {this.props.fetchingFriends ? (
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
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    fetchingFriends: friendsReducer.fetchingFriends
  };
};

export default connect(mapStateToProps, { fetchFriends })(App);
