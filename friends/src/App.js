import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Components/Friends';
import CreateFriendForm from './Components/CreateFriendForm';
import {getFriends} from './Actions'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to FriendBook</h1>
        </header>
        <CreateFriendForm />
        <div className="List">
          {this.props.friendsFetched ? this.props.friends.map((friend, index )=> { return <Friends key={index} index={index} friend={friend} />}) : (<img src={logo} className="App-logo" alt="logo" />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    friendsFetched: state.friendsFetched  
  }
}
export default connect(mapStateToProps, { getFriends })(App);
