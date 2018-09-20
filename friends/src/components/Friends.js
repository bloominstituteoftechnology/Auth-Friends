import React, { Component, Fragment } from 'react'

export default class Friends extends Component {
  render() {
    return (
      <div>
        <h1>Friends Component</h1>
        { this.props.friends.map(friend => {
            return (
              <Fragment>
                <h3>{friend.name}</h3>
                <h5>{friend.age}</h5>
                <p>{friend.email}</p>
              </Fragment>
            )
          })
        }
      </div>
    )
  }
}
