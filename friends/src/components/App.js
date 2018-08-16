import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends, addFriend, updateFriend } from '../actions';
import AddFriend from './AddFriend';
import Friend from './Friend';
import UpdateFriend from './UpdateFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newName: '',
      newAge: 0,
      newEmail: ''
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitHandler = event => {
    event.preventDefault();
    let newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    }
    this.props.addFriend(newFriend);
    this.setState({
        newName: '',
        newAge: 0,
        newEmail: ''
    });
    this.props.getFriends();
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        {(this.props.fetching || this.props.savingFriends) ?
          (<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>) :
          <Friend friends={this.props.friends} />
        }
        <div className='forms'>
          <AddFriend name={this.state.newName} age={this.state.newAge} email={this.state.newEmail} change={this.changeHandler} submit={this.submitHandler} />
          <UpdateFriend />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
  }
}

export default connect(mapStateToProps, { getFriends, addFriend })(App);
