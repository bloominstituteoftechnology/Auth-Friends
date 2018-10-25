import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import { fetchFriends, postFriend, deleteFriend } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    }

  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  addFriend = (ev) => {
    ev.preventDefault();
    this.props.postFriend(this.state.name, this.state.age, this.state.email);
  }

  changeHandler = (ev) => {
    this.setState({[ev.target.name]: ev.target.value});
  }

  removeFriend = (ev) => {
    console.log(ev.target.name)
    ev.preventDefault();
    this.props.deleteFriend(ev.target.name);
  }

  render() {
    return (
      <div className="App">
        <Friends 
        friends={this.props.friends}
        removeFriend={this.removeFriend}
        
        ></Friends>
        <FriendForm 
        addFriend={this.addFriend} 
        changeHandler={this.changeHandler}
        ></FriendForm>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,
    friendsSaved: state.friendsReducer.friendsSaved,
    savingFriends: state.friendsReducer.savingFriends,
    updatingFriend: state.friendsReducer.updatingFriend,
    friendUpdated: state.friendsReducer.friendUpdated,
    deletingFriend: state.friendsReducer.deletingFriend,
    friendDeleted: state.friendsReducer.friendDeleted,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends, postFriend, deleteFriend }
)(App);
