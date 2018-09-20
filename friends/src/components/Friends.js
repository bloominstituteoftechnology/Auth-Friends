import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Friends.css';
import { fetchFriends, saveFriend } from '../actions'
import { connect } from 'react-redux'

import FriendList from './FriendList'
import SubmitForm from './SubmitForm'

class Friends extends Component {
  state = {
    name: 'Luisan',
    age: '24',
    email: 'luisangelsc@gmail.com'
  }

  componentDidMount() {
    this.props.fetchFriends()
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  saveFriend = () => {
    console.log('Save Friend firing');
    saveFriend(this.state)
  }


  render() {
    // console.log('Friends');
    // console.log(this.props);
    // console.log(this.props.friends);;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Home!</h1>
        </header>
        <SubmitForm
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.saveFriend}
        />
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    friends: state.friends,
    state,
  }
}

export default connect(mapStatetoProps,
  {fetchFriends, saveFriend})
  (Friends)
// export default Friends;
