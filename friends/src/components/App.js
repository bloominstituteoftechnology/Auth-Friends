import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import {fetchingFriendsAction} from "../actions";


class App extends Component {



  componentDidMount() {
    this.props.fetchingFriendsAction();
  }



  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.id}>{friend.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
          friends: state.friends,
          fetching: state.fetchingFriends

  };
};


export default connect(mapStateToProps, {fetchingFriendsAction})(App);
