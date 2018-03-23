import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFriends } from '../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';


class UpdateFriend extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          newName: '',
          newAge: 0,
          newEmail: ''
        };
        this.toggle = this.toggle.bind(this);
        this.toggleSet = this.toggleSet.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

      toggleSet() {
        this.props.updateFriends(this.props.id, {
            name: this.state.newName,
            age: this.state.newAge,
            email: this.state.newEmail,
          });
        this.setState({
          modal: !this.state.modal,
          newName: '',
          newAge: 0,
          newEmail: ''
        });
      }

      handleChange(e) {
          const newEvent = e;
          this.setState({
            [newEvent.target.name]: newEvent.target.value
          });
      }

    render() {
        return (
          <div>
            <Button outline color="primary" size="sm" onClick={this.toggle}>Update</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}></ModalHeader>
              <ModalBody>
                <Input className="text-center" type="text" name="newName" id="nameText" placeholder="Name" onChange={this.handleChange}/>
                <Input className="text-center" type="text" name="newAge" id="ageText" placeholder="Age" onChange={this.handleChange}/>
                <Input className="text-center" type="email" name="newEmail" id="emailText" placeholder="Email" onChange={this.handleChange}/>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleSet}>Update</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    
}

const mapStateToProps = state => {
    return {
      updatingFriends: state.updatingFriends,
      friends: state.friends,
      error: state.errorMessage,
    };
};

export default connect(mapStateToProps, { updateFriends })(UpdateFriend);