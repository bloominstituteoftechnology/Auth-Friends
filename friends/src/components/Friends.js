import React, { Component } from 'react'

class Friends extends Component {
    render() {
        return (
        <div className="friends">
            {this.props.friends.map(friend => {
                return (
                    <div className="friend" key={friend.id}>
                        <li>{friend.name}</li>
                        <button onClick={this.props.handleDelete} id={friend.id}>X</button>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default Friends;