import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendCard from './FriendCard'
import FriendForm from './AddFriend'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetched, deleted } from './actions';

class App extends Component {
  componentDidMount = () => {
    this.props.fetched();
  }

  //{...props} friends={this.props.friends} delete={this.deleteFriend} update={this.updateFriend} 
  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <h1>Awesome Friendslist!</h1>
        <div className="friend-list">

          <FriendCard />
        </div>
        <FriendForm />
        {/* <Route exact path="/updatefriend" render={(props) => <AddFriend {...props} name={this.state.name} age={this.state.age} email={this.state.email} function={this.updateDataText} function2={this.postNewFriend} />} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetchStatus: state.fetchingFriends,
    updateStatus: state.updatingFriend,
    deleteStatus: state.deletingFriend,
    savingStatus: state.savingFriends,
    error: state.error
  }
}

export default connect(mapStateToProps, {
  fetched,
  deleted,
})(App);