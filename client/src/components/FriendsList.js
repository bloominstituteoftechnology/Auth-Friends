import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../actions'
import { Friend } from '.'

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends()
  }
  friendElements = () => (
    this.props.friends.map((friend) => <Friend key={friend.id} {...friend} />)
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

export default connect(mapStateToProps, { fetchFriends })(FriendsList)