import React, { Component } from 'react'
import UpdateFriendForm from './UpdateFriendForm'

class Friends extends Component {
  state = {
    updating: false
  }

  isUpdating = () => {
    this.setState({
      updating: !this.state.updating
    })
  }

  render() {
    return (
      <div>
        <h2>Friends Component</h2>
        { this.props.friends.map(friend => {
            return (
              <div key={friend.id}>
                <h3>{friend.name}</h3>
                <h5>{friend.age}</h5>
                <p>{friend.email}</p>
                <button onClick={this.isUpdating}>Update {friend.name}</button>

                {this.state.updating ? <UpdateFriendForm  friend={friend} updateFriend={this.props.updateFriend} isUpdating={this.isUpdating}/> : ''}
              </div>
            )
          })
        }
        
      </div>
    )
  }
}

export default Friends
