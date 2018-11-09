import FriendForm from './friendForm';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getFriends } from '../actions/index';

class Friend extends Component {

  componentDidMount() {
    this.props.getFriends();

  }
  render() {
    {if (this.props.loading) return <h1>Loading</h1>}
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
    friends: state.friends,
    loading: state.loading,
    error: state.error,
  }
}


export default connect(mapStateToProps, { getFriends })(Friend)