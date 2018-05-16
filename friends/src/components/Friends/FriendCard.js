import React from "react";
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';


const FriendCard = (props) => {
  return (
    <div>
        <Card className="Friend-card">
                <CardBody>
                  <CardTitle>{props.friend.name} </CardTitle>
                    <CardSubtitle>{props.friend.email}</CardSubtitle>
                    <CardText>{props.friend.age}</CardText>
                </CardBody>
            </Card>
    </div>
  )
}

export default FriendCard;