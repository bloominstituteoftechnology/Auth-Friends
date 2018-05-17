import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

const FriendList = props => {
    return (
        <div>
            {this.props.friends.map(friend => {
                return (
                    <p key={friend.id}> {friend.name} </p>
                    )
            })}
        </div>
    )
  }