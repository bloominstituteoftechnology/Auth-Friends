import React, { Component } from 'react'

export default class Friend extends Component {

  render() {
    return (
      <div className="friend_component">
        <p>{this.props.friend.name}</p>
        <p>{this.props.friend.age}</p>
        <p>{this.props.friend.email}</p>
      </div>
    )
  }
}
