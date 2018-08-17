import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, saveNewFriend } from './store/actions';
import './App.css';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';

const initialAppState =() => {
  return {newName: '',
  newAge: '',
  newEmail: '',
  number: this.props.friends.length
  }  
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialAppState;
  }

  componentDidMount() {
    return this.props.getFriends();
  }

  changeHandler = (event) => {
    this.setState(...this.state, {
      [event.target.name]: event.target.value
    })
  }

  submitFriendHandler = (event) => {
    const friend={
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail,
      id: this.state.number
    }
    event.preventDefault();
    this.props.saveNewFriend(friend);
    this.setState({
      newName: '',
      newAge: '',
      newEmail: '',
      number: friend.id + 1
    })
  }

  render() {
    return (
      <div className="App">
        <FriendForm changeHandler={this.changeHandler} submitFriend={this.submitFriendHandler} newName={this.state.newName} newAge={this.state.newAge} newEmail={this.state.newEmail} />
        {this.props.fetchingFriends ? <h3>Loading Friends...</h3> : null}
        {this.props.friends !== [] ? <FriendList friends={this.props.friends} /> : null }
        {this.props.error !== null ? <h3>{this.props.error}</h3> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchingFriends: state.fetchingFriends,
  friendsFetched: state.friendsFetched,
  friendsSaved: state.friendsSaved,
  savingFriends: state.savingFriends,
  updatingFriend: state.updatingFriend,
  friendUpdated: state.friendUpdated,
  deletingFriend: state.deletingFriend,
  friendDeleted: state.friendDeleted,
  friends: state.friends,
  error: state.error
});

export default connect(mapStateToProps, { getFriends, saveNewFriend })(App);
