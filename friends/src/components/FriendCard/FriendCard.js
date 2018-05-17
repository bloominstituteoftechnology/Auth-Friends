import React from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { removeFriend } from '../../actions';
import './FriendCard.css';


const FriendCard = props => {
  return (
    <React.Fragment>
      <Card className="FriendCard">
        <CardBody>
          <CardTitle>{props.friend.name}</CardTitle>
          <ul>
            <li><strong>Age:</strong> {props.friend.age}</li>
            <li><strong>Email:</strong> {props.friend.email}</li>
          </ul>
          <div className="actions">
            <button className="remove" onClick={() => { props.removeFriend(props.friend.id) }}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button className="edit">
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
 
export default connect(null, { removeFriend })(FriendCard);