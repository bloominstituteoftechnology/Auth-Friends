import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
// import axios from 'axios';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';

// pull in actions from action/index
import { fetchFriends, addNewFriend } from './store/actions';

class App extends Component {
  state = {
      friends: [],
      name: '',
      age: '',
      email: ''

    };

    componentDidMount() {
      // call our action
      this.props.fetchFriends();
    }

  textInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveFriendData = (event) => {
    event.preventDefault();
    console.log('firing')
    const friend = {name: this.state.name, age: this.state.age, email: this.state.email};
    this.props.addNewFriend(friend);
  };
  render() {
    return (
      <div className="App">
   
        {this.props.fetchingFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
             <FriendsList friends={this.props.friends} />
          </div>

        )}

        <div>
        <FriendForm 
            name={this.props.name} 
            age={this.props.age} 
            email={this.props.email} 
            saveFriendData={this.saveFriendData}
            textInputHandler={this.textInput}
        />
        </div>
        
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the friends and the fetching boolean
const mapDispatchToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error
  };
};

export default connect(mapDispatchToProps, {
  /* actions go here */
  fetchFriends,
  addNewFriend
})(App);

