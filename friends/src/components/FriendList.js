import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { connect } from 'react-redux'

const FriendList = props => {
    return (
        <div>
            {this.props.friends.map(friend => {
                return (
                    <p key={friend.name}> {friend.name} </p>
                    )
            })}
        </div>
    )
  }

  const mapStateToProps = state => {
    return {
      friends: state.friends,
    }
  }

export default connect(mapStateToProps)(FriendList)