import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { fetchFriends, createFriend, deleteFriend } from './Actions';

class App extends Component {
  state = {
    newFriendName: '',
    newFriendAge: '',
    newFriendEmail: ''
  };

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='NewFriend'>
          <h2>New Friend</h2>
          <input
            className='NewFriend__Input'
            type='text'
            placeholder='Name'
            name='newFriendName'
            value={this.state.newFriendName}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className='NewFriend__Input'
            type='number'
            placeholder='Age'
            name='newFriendAge'
            value={this.state.newFriendAge}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className='NewFriend__Input'
            type='text'
            placeholder='Email'
            name='newFriendEmail'
            value={this.state.newFriendEmail}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <button
            className='NewFriend__Button'
            onClick={() => {
              this.props.createFriend({
                name: this.state.newFriendName,
                age: this.state.newFriendAge,
                email: this.state.newFriendEmail
              })
            }}
          >
            Add Friend
          </button>
        </div>
        <div>
          {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
          {this.props.pending === true ? <img src={logo} className="App-logo" alt="logo" /> : 
            <div className='FriendList'>
              {this.props.friends.map(friend => 
                <div key={friend.id} className='Friend'>
                  <div className='Friend__Head'>
                    <h3>{friend.name}</h3>
                    <button
                      className='Friend__Delete'
                      onClick={() => {
                        this.props.deleteFriend(friend.id)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className='Friend__Info'>
                    <div>Age: {friend.age}</div>
                    <div>Email: {friend.email}</div>
                  </div>
                </div>)
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pending: state.pending,
    error: state.error,
    friends: state.friends
  };
};

export default connect(mapStateToProps, { fetchFriends, createFriend, deleteFriend })(App);
