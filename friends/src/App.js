import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { fetchFriends, postFriends } from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ''
    };
  }

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
        <input 
        type = 'text' 
        placeholder='friends' 
        name='friends' 
        value={this.state.friends}
        onChange= {(e) => this.setState([e.target.name] = e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsfetched: state.friendsfetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriends: state.updatingFriends,
    friendsUpdated: state.friendsUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    friend: state.friend,
    error: state.error
  };
};

export default connect(mapStateToProps, 
  { fetchFriends, postFriends }) (App) ;