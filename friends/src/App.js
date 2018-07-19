import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends } from './friendAction';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
         {this.props.friends.map(friends => {
           return <div key={friend.id} />
         })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    fetchingFriends: state.fetchingFriends
  };
};

export default connect(mapStateToProps, { fetchFriends })(App);
