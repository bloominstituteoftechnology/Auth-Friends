import React, { Component } from 'react';
import './App.css';
import { getFriends } from './actions';
import { connect } from 'react-redux';
import Friend from './components/Friend';
import CreateFriendForm from './components/CreateFriendForm';
import UpdateFriend from './components/UpdateFriend';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"/>
        {this.props.error !== '' ? <h2>{this.props.error}</h2> : null}
        { this.props.friends.map( friend => {          
          return <Friend key={friend.id} friend={friend} />
        })}
        {this.props.pending ? <h1>LOADING</h1> : null}
        {this.props.updating ? <UpdateFriend /> : null}
        <CreateFriendForm/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    pending: state.pending,
    updating: state.updating
  }
}

export default connect(mapStateToProps, { getFriends })(App);
