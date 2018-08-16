import React, { Component } from 'react'

class Friends extends Component {
    render() {
        return (
        <div className="friends">
            {this.props.friends.map(friend => {
                return (
                    <div className="friend" key={friend.id}>
                        <h3>{`${friend.name}, ${friend.age}`}</h3>
                        <p>{friend.email}</p>
                        <button onClick={this.props.storeUpdate} id={friend.id}>Update</button>
                        <button onClick={this.props.deleteFriend} id={friend.id}>X</button>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Friends;