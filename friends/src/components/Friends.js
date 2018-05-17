import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Friends = (props) => {
  console.log("props on Friends Component",props)
  
  return(
    <div className="row">
      {props.friends.map(friend => {
        return(
          <div key={friend.id} className="col-4 mt-4">
            <Card>
              <CardBody>
                <CardTitle>Name: {friend.name}</CardTitle>
                <CardSubtitle>Age: {friend.age}</CardSubtitle>
                <CardText>Email: {friend.email}</CardText>
                <Button>Delete</Button>                
              </CardBody>
            </Card>
          </div>
        )
      })}

    </div>
  ) 
}

const mapStateToProps = state => {
  
  return {
    friends: state.friendsReducer.friends,
  }
}
 
export default connect(mapStateToProps, {})(Friends);