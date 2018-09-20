import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import {getFriends} from './actions';
import {connect} from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <FriendForm />
        {this.props.error ? <h2>There was an error fetching your friends :(</h2> : null}
        {this.props.gettingFriends ? (<h2>Wait one moment while we fetch your friends...</h2>):(<Friends friends={this.props.friends}/>)}
      </div>
    );
  }
}

const mapStateToProps = state=> {
  const {friendsReducer} = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  };
};

export default connect(mapStateToProps, {getFriends})(App);
