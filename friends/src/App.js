import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import { getFriends, submitFriend } from './actions';

class App extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  componentDidMount() {
    this.props.getFriends();
  }

  handleFriendSubmit = e => {
    e.preventDefault();

    const newFriend = { name: this.state.name,
                       age: this.state.age,
                       email: this.state.email };

    this.props.submitFriend(newFriend);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCancel = e => {
    e.preventDefault();

    this.setState({
      name: '',
      age: '',
      email: ''
    });
  }

  render() {
    return (
      <div className="container">
        {this.props.fetchingFriends ? (
          <div>Loading friends...</div>
        ) : (
          <div className="container">
            <FriendsForm name={this.state.name}
                         age={this.state.age}
                         email={this.state.email}
                         handleFriendSubmit={this.handleFriendSubmit}
                         handleInputChange={this.handleInputChange}
                         handleCancel={this.handleCancel} />
            <FriendsList friends={this.props.friends}/>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    friends: dispatch.friendsReducer.friends,
    fetchingFriends: dispatch.friendsReducer.fetchingFriends
  }
}

export default connect(mapDispatchToProps, { getFriends, submitFriend })(App);
