import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(this);
    return (
      <div className="App">
        {this.props.fetching ?
          (<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>) :
          (<div>
            <h1>Friends List</h1>
            {this.props.friends.map(friend => {
              return (
                <p key={friend.id}>{friend.name}</p>
              )}
            )}
          </div>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    friends: state.friends,
    error: state.error
  }
}

export default connect(mapStateToProps, { getFriends })(App);
