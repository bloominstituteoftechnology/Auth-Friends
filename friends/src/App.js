import React, { Component } from 'react';
import './App.css';
import { getFriends } from './actions';
import AddFriendForm from './components/AddFriendForm';
import FriendsList from './components/FriendsList';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    console.log('in cdm');
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
          <AddFriendForm />
          <FriendsList friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { getFriends })(App);
