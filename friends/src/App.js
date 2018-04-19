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
       {/* <ul>
       {this.props.map(char => {
         return <li key={char.name}>{char.name}</li>;
       })}
     </ul> */}
     </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.friends.fetchingFriends,
    friendsfetched: state.friends.friendsfetched,
    friendsSaved: state.friends.friendsSaved,
    savingFriends: state.friends.savingFriends,
    updatingFriends: state.friends.updatingFriends,
    friendsUpdated: state.friends.friendsUpdated,
    deletingFriend: state.friends.deletingFriend,
    friendDeleted: state.friends.friendDeleted,
    friend: state.friends.friend,
    error: state.friends.error
  };
};

export default connect(mapStateToProps, 
  { fetchFriends, postFriends }) (App) ;