import React, {Component} from 'react';

import { deleteFriend, updateFriend } from '../actions';

import {connect} from 'react-redux';


import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';




class FriendButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          newName: '',
          newAge: '',
          newEmail: ''
        };
    
        this.toggle = this.toggle.bind(this);
        this.updateFriendClick = this.updateFriendClick.bind(this);
      }
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }
    
    handleName = (event) => {
        
        this.setState({ newName: event.target.value})
    };

    handleAge = (event) => {
        
        this.setState({ newAge: event.target.value})
        
    };

    handleEmail = (event) => {
        
        this.setState({ newEmail: event.target.value})
    };
    
    updateFriendClick() {
        this.toggle();

        let fName, fAge, fEmail;

        if (this.state.name !== '') {
        fName = this.state.newName;    
        } else {
        fName = this.props.friend.name;
        }
        
        console.log(fName);

        
        this.props.updateFriend(
            {
                id: this.props.friend.id,
                name: this.state.newName,
                age: this.state.newAge,
                email: this.state.newEmail
            }
        )

    }
    
    render(){
        //document.getElementById('new-Name').focus()
        return(
            <fragment>
                <Button color="danger" onClick={this.toggle}>Edit</Button>
                <Button onClick={ ()=> {this.props.deleteFriend(this.props.friend)} }>Delete</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} autoFocus={false}>
                    <ModalHeader toggle={this.toggle}>Enter Updated Friend Info</ModalHeader>
                    <Form>
                    <ModalBody>
                            <FormGroup>
                                <Label for="newName">New Name</Label>
                                <Input onChange={this.handleName} value={this.state.newName} autoFocus={true} name="newName" placeholder={this.props.friend.name}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>New Age</Label>
                                <Input onChange={this.handleAge} value={this.state.newAge} placeholder={this.props.friend.age} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="newEmail">New E-mail</Label>
                                <Input onChange={this.handleEmail} value={this.state.newEmail} name="newEmail" placeholder={this.props.friend.email} />
                            </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type='submit' onClick={this.updateFriendClick}>Update Info</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Form>
                </Modal>
            </fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
    friends: state.friends
    }
}
export default connect(mapStateToProps, {deleteFriend, updateFriend})(FriendButtons);

