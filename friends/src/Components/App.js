import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, addFriend } from '../actions'
import FriendList from './Friends'
import CreateFriendForm from './CreateFriendForm'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendName: '',
      friendAge: '',
      friendEmail: '',
    }
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  createFriend = event => {
    event.preventDefault();
    const { friendName, friendAge, friendEmail } = this.state;
    const newFriend = {
      name: friendName,
      age: friendAge,
      email: friendEmail
    }
    this.props.addFriend(newFriend);
    this.setState({ friendName: '', friendAge: '', friendEmail: '' });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="App">
        {console.log('props', this.props)}
        <header className="App-header">
          <h1 className="App-title">Redux Friends</h1>
        </header>
        <CreateFriendForm friendName={this.state.friendName} friendAge={this.state.friendAge} friendEmail={this.state.friendEmail} handleInputChange={this.handleInputChange} createFriend={this.createFriend} />
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const stateProps = state => {
  console.log('state', state.friendsReducers)
  return {
    friends: state.friendsReducers.friends,
    fetching: state.friendsReducers.fetching,
    fetched: state.friendsReducers.fetched,
    error: state.friendsReducers.error
  }
}

export default connect(stateProps, { fetchFriends, addFriend })(App);