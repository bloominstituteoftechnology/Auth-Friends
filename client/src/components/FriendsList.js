import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends, deleteFriend } from '../actions'
import { Friend } from '.'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends()
  }

  friendElements = () => (
    this.props.friends.map((friend) => (
      <Friend {...friend}
        key={friend.id}
        deleteFriend={this.props.deleteFriend}
        selected={this.isSelected(friend)} />
    ))
  )

  isSelected = (friend) => {
    const selected = this.props.selectedFriend || { id: -1 }
    return friend.id === selected.id
  }

  render() {
    return (
      <Wrapper>
        {this.friendElements()}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  friends: state.friends,
  selectedFriend: state.selectedFriend
})

export default connect(mapStateToProps, { fetchFriends, deleteFriend })(FriendsList)