import React, { Component } from 'react';
import { connect} from 'react-redux';

import logo from '../logo.svg';
import './App.css';
import Friends from './Friends';
import FriendForm from './FriendForm.js';
import { fetchFriends } from '../ActionCreators/index.js';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{`Dante's Friends`}</h1>
          <FriendForm />
        </header>
        {this.props.error ? <h3> Error Fetching Friends</h3> : null}
        <div className="Flex-container">
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

export default connect(mapStateToProps, {fetchFriends})(App);