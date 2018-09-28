import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends, saveFriend } from './actions';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSaveFriendChange = event => {
    event.preventDefault();
    const newFriend = {
      id: this.props.friends.length + 1,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    };
    this.props.saveFriend(newFriend);
    this.setState({
      name: '',
      age: '',
      email: ''
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Friends friends={this.props.friends} />
        <FriendForm 
          state={this.state} 
          handleInput={this.handleInputChange}
          handleSaveFriend={this.handleSaveFriendChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    savingFriends: state.savingFriends,
    error: state.error
  };
}

export default connect(mapStateToProps, {fetchFriends, saveFriend})(App);
