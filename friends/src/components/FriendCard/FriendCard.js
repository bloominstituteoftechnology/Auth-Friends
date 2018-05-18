import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle } from 'reactstrap';
import FriendModal from '../FriendModal/FriendModal';
import { removeFriend, updateFriend } from '../../actions';
import './FriendCard.css';

class FriendCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      editButtonProps: {
        class: 'edit',
        isIcon: true,
        icon: 'fas fa-pencil-alt'
      }
    }
  }
  updateThisFriend = (friendObj, id) => {
    if (friendObj) {
      this.props.updateFriend(id, friendObj);
    }
  };
  render() {
    return (
      <React.Fragment>
        <Card className="friend-card">
          <CardBody>
            <CardTitle>{this.props.friend.name}</CardTitle>
            <ul>
              <li><strong>Age:</strong> {this.props.friend.age}</li>
              <li><strong>Email:</strong> {this.props.friend.email}</li>
            </ul>
            <div className="actions">
              <button className="remove" onClick={() => { this.props.removeFriend(this.props.friend.id) }}>
                <i className="fas fa-trash-alt"></i>
              </button>
              <FriendModal
                friend={this.props.friend}
                modalBtn={this.state.editButtonProps}
                modalTitle="Update Friend"
                actionTitle="Update"
                action={this.updateThisFriend}
              />
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
 
export default connect(null, { removeFriend, updateFriend })(FriendCard);