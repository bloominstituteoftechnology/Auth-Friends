import React, { Component } from 'react';
import './App.css';
import { fetchFriends } from './actions';
import { connect } from 'react-redux';
import Friend from './components/Friend';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends()
    console.log(this.props.fetchFriends());
    console.log(this.props.friends);
  }

  render() {
    return (
      <div className="App">
         {this.props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends
  }
}

const mapActionsToProps = {
  fetchFriends: fetchFriends
}

export default connect( mapStateToProps, mapActionsToProps )(App);
