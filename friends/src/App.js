import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFriends } from './actions'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
      {this.props.friends.map(friends => {
        return(
          <div key={friends.id}>{friends.name}, {friends.age}, email: {friends.email}</div>)
      })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
  }
}

export default connect(
  mapStateToProps, {
    fetchFriends
  }
)(App)



