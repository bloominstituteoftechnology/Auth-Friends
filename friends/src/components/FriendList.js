import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap'
import { connect } from 'react-redux'

const FriendList = props => {
    return (
    <div>
        {props.friends.map(friend => {
        return (
        <Card key={friend.id}>
            <CardBody>
                <CardText> {friend.name} </CardText>
                <CardText> {friend.age} </CardText>
                <CardText> {friend.email} </CardText>
                </CardBody>
                </Card>

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