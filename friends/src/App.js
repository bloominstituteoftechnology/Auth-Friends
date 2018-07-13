import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getFriends } from '../src/actions'
import FriendsList from './components/FriendsList'
import UpdateFriends from './components/UpdateFriends'

class App extends Component {

  componentDidMount(){
    this.props.getFriends('http://localhost:5000/api/friends/')
  }

  render() {
    return (
      <div className="App">
        <UpdateFriends/>
        <FriendsList fetching={this.props.fetching} friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetching:state.fetching,
  }
}
export default connect(mapStateToProps, {getFriends})(App);
