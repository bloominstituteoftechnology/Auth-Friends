import React from 'react';
import { Button, Alert, UncontrolledTooltip } from 'reactstrap';

const Friends = props => {
  return (
    <div className="friends">
      {props.friends.map((friend, ind) => (
        <div className="friend" key={friend.id}>
          <h4>
            <a href={`mailto:${friend.email}`}>{friend.name}</a>{" "} 
            is {friend.age} years old.
          </h4>
          {friend.hasOwnProperty('isNew') ? (
            <Alert color='success'>New!</Alert>
          ) : null}
          <div className="friend-btns">
            <Button id={friend.id} onClick={props.update} color="success">
              <span id={`update${ind}`}>Update</span>
            </Button>
            <UncontrolledTooltip placement="left" target={`update${ind}`}>
              Use the form above, then click here to update.
            </UncontrolledTooltip>
            <Button id={friend.id} onClick={props.del} color="danger">
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
