import React, { Component } from 'react'
 class Friends extends Component {
    render() {
        return (
        <div className="friends">
            {this.props.friends.map(friend => <li key={friend.id}>{friend.name}</li>)}
        </div>
        )
    }
}
 export default Friends;