import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class FriendModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: (this.props.friend !== undefined) ? this.props.friend.name : '',
      age: (this.props.friend !== undefined) ? this.props.friend.age : '',
      email: (this.props.friend !== undefined) ? this.props.friend.email : ''
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
  primaryAction = () => {
    if (this.props.friend !== undefined){
      this.props.action(this.getStateObj(), this.props.friend.id);
    } else {
      this.props.action(this.getStateObj());
      this.setState({ name: '', age: '', email: '' });  
    }
    
    this.toggle();
  };
  getStateObj = () => {
    return (this.state.name !== '' && this.state.age !== '' && this.state.email !== '')
      ? {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      }
      : null;
  };
  render(){
    return (
      <React.Fragment>
        <button className={this.props.modalBtn.class} onClick={this.toggle}>
          {(this.props.modalBtn.isIcon) ? <i className={this.props.modalBtn.icon}></i> : this.props.modalBtn.innerHTML}
        </button> 
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.modalTitle}</ModalHeader>
          <ModalBody>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              name="age"
              type="number"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.primaryAction}>{this.props.actionTitle}</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  };
}
 
export default FriendModal;