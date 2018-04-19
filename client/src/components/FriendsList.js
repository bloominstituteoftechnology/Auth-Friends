import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends, deleteFriend } from '../actions'
import { Friend } from '.'

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends()
  }
  friendElements = () => (
    this.props.friends.map((friend) => (
      <Friend {...friend} 
        key={friend.id}
        deleteFriend={this.props.deleteFriend} />
    ))
  )
  render() {
    return (
      <div className='FriendsList'>
        {this.friendElements()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends
})

export default connect(mapStateToProps, { fetchFriends, deleteFriend })(FriendsList)