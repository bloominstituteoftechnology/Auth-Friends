import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import {getFriends} from './actions';
class App extends Component {

    componentDidMount() {
        this.props.getFriends();
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <ul>
              {this.props.friends.map(friend => {
                  return <li key={friend.id}>{friend.name}</li>
              })}
          </ul>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
      friends: state.friends,
      gettingFriends: state.gettingFriends
  };
};

export default connect(mapDispatchToProps, {getFriends}) (App);
