import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { addFriend } from '../../actions';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal: false,
      newFriendName: '',
      newFriendAge: '',
      newFriendEmail: ''
    }
    this.toggle = this.toggle.bind(this);
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]:event.target.value });
  };
  addAFriend = () => {
    if (this.state.newFriendName !== '' && this.state.newFriendAge !== '' && this.state.newFriendEmail !== ''){
      const newFriend = {
        name: this.state.newFriendName,
        age: this.state.newFriendAge,
        email: this.state.newFriendEmail
      };
      this.props.addFriend(newFriend);
      this.setState({ newFriendName: '', newFriendAge: '', newFriendEmail: '' });
    }
    this.toggle();
  };
  render() { 
    return ( 
      <div className="AddFriend">
        <button onClick={this.toggle}>Add Friend</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a New Friend</ModalHeader>
          <ModalBody>
            <input
              name="newFriendName"
              type="text"
              placeholder="Name"
              value={this.state.newFriendName}
              onChange={this.handleChange}
            />
            <input
              name="newFriendAge"
              type="number"
              placeholder="Age"
              value={this.state.newFriendAge}
              onChange={this.handleChange}
            />
            <input
              name="newFriendEmail"
              type="email"
              placeholder="Email"
              value={this.state.newFriendEmail}
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addAFriend}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
     )
  }
}
 
export default connect(null, { addFriend })(AddFriend);