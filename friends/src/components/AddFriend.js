import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveFriends } from '../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';


class Friends extends Component {

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
          this.props.saveFriends({
            name: this.state.newName,
            age: this.state.newAge,
            email: this.state.newEmail,
          })
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
          console.log(this.state);
      }


    render() {
        return (
          <div>
            <Button color="danger" onClick={this.toggle}>Add new friend</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Tell me about your friend</ModalHeader>
              <ModalBody>
                <Input type="text" name="newName" id="nameText" placeholder="Name" onChange={this.handleChange}/>
                <Input type="text" name="newAge" id="ageText" placeholder="Age" onChange={this.handleChange}/>
                <Input type="email" name="newEmail" id="emailText" placeholder="Email" onChange={this.handleChange}/>
             </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleSet}>Add</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    
}

const mapStateToProps = state => {
    return {
      savingFriends: state.fetchingFriends,
      friends: state.friends,
      error: state.errorMessage,
    };
};

export default connect(mapStateToProps, { saveFriends })(Friends);