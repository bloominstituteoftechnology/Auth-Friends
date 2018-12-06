import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import { fetchFriends, addFriend } from './actions'


class App extends Component {

  componentDidMount(){
    this.props.fetchFriends();
  }

  render() {
    console.log(this.props.friends)
    return (
      <div className="App">
      <CreateFriendForm {...this.props} />
      <h2>Friends:</h2>
       <Friends friends={this.props.friends} />
       
      </div>
    );
  }
}

function mapStateToProps({ friendsList }){
  return {
    friends: friendsList.friends,
    isFetching: friendsList.fetchingFriends
  }
}

export default connect(
  mapStateToProps,
  {
    fetchFriends,
    addFriend
  }
)(App);
