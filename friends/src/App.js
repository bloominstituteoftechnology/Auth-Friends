import React, { Component } from 'react';
import './App.css';
import {add,fetchFriends} from './actions';
import {connect} from 'react-redux';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

class App extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  }

  render() {
    return (
    <div>
      <h1>list of friends</h1>
      <NewFriend friends={this.props}/>
      <FriendsList friends={this.props.info.friends} />
    </div>
    );
  }

}

const mapStateToProps = (state) =>{
  return {
    info:state
  }
}


export default connect(mapStateToProps,{add,fetchFriends})(App);
