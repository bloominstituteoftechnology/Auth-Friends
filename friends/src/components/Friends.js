import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Friends.css';
import { fetchFriends } from '../actions'
import { connect } from 'react-redux'

import FriendList from './FriendList'

class Friends extends Component {

  componentDidMount() {
    this.props.fetchFriends()
  }

  render() {
    console.log('Friends');
    console.log(this.props);
    console.log(this.props.friends);;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Home!</h1>
        </header>
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    friends: state.friends,
    state,
  }
}

export default connect(mapStatetoProps, {fetchFriends})(Friends)
// export default Friends;
