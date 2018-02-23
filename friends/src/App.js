import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './containers/FriendList'
import { connect } from 'react-redux';
import { getFriends, postFriend } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
    console.log('Props are:',this.props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendList />
        <button onClick={() => this.props.postFriend({name: 'Leon', age: 23, email: 'sleepyhollow.net'})}>Click me to add a friend!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  };
}

export default connect(mapStateToProps, { getFriends, postFriend })(App);
