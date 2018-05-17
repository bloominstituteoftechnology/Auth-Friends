import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import { removeFriend, updateFriend } from '../../actions';
import './FriendCard.css';

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      friendName: this.props.friend.name,
      friendAge: this.props.friend.age,
      friendEmail: this.props.friend.email
    }
    this.toggle = this.toggle.bind(this);
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  fetchFriend = () => {
    this.toggle();
  };
  updateThisFriend = () => {
    if (this.state.friendName !== '' && this.state.friendAge !== '' && this.state.friendEmail !== '') {
      const updatedFriend = {
        name: this.state.friendName,
        age: this.state.friendAge,
        email: this.state.friendEmail
      };
      this.props.updateFriend(this.props.friend.id, updatedFriend);
    }
    this.toggle();
  };
  render() {
    return (
      <React.Fragment>
        <Card className="FriendCard">
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
              <button className="edit" onClick={this.fetchFriend}>
                <i className="fas fa-pencil-alt"></i>
              </button>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Update Friend</ModalHeader>
                <ModalBody>
                  <input
                    name="friendName"
                    type="text"
                    placeholder="Name"
                    value={this.state.friendName}
                    onChange={this.handleChange}
                  />
                  <input
                    name="friendAge"
                    type="number"
                    placeholder="Age"
                    value={this.state.friendAge}
                    onChange={this.handleChange}
                  />
                  <input
                    name="friendEmail"
                    type="email"
                    placeholder="Email"
                    value={this.state.friendEmail}
                    onChange={this.handleChange}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.updateThisFriend}>Update</Button>
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
 
export default connect(null, { removeFriend, updateFriend })(FriendCard);