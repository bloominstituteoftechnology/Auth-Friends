import FriendForm from './friendForm';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getFriends } from '../actions/index';

class Friend extends Component {

  componentDidMount() {
    this.props.getFriends();

  }
  render() {
    return (
      <div>
        <h2>Friends</h2>
        {this.props.friends.map((friend) => {
          return (
            <p key={friend.id}>Name: {friend.name}, Age: {friend.age}, Email: {friend.email}</p>
          )
        })}
        <FriendForm />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}


export default connect(mapStateToProps, { getFriends })(Friend)