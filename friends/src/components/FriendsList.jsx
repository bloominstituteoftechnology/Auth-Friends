import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import Friend from './Friend'

class FriendsList extends React.Component {
  state = {
    friendsData: null
  }

  componentDidMount() {
    this.fetchFriends()
  }

  fetchFriends = () => {
    axiosWithAuth().get("/api/friends")
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          friendsData: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Welcome to the friends list!</h1>
        {this.state.friendsData && this.state.friendsData.map(friend => <Friend key={friend.id} data={friend} />)}
      </div>
    )
  }
}

export default FriendsList