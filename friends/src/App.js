import React, { Component } from 'react';
import './App.css';
import { fetchFriends, createFriend } from './actions';
import { connect } from 'react-redux';
import AddFriend from './AddFriend';

class App extends Component {

state = {
  friend: ''
};

componentDidMount() {
  this.props.fetchFriends();
}

  render() {
    console.log(this.props)
    return <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddFriend />
        <ul>
          {this.props.friends.map(friend => {
            return <div key={friend.name}>{friend.name}</div>;
          })}
        </ul>
      </div>;
  }
}


const mapStateToProps = state => {
  console.log(state)
  
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending
  }
}
export default connect(mapStateToProps, {fetchFriends, createFriend})(App);
