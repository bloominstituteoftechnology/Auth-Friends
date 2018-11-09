import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import {fetchFriends} from './actions/actions'

import Friendslist from './components/FriendsList';
import CreateFriendForm from './components/CreateFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';


class App extends Component {

  componentDidMount(){
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        
        <CreateFriendForm />
        <UpdateFriendForm />
        <Friendslist />

      </div>
    );
  }
}

export default connect(() => ({}), { fetchFriends })(App);
