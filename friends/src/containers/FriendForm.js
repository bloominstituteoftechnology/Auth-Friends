import React, { Component } from 'react';
import { createFriend } from '../actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './FriendForm.css';

class FriendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        };
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleCreateFriend = e => {
        const { name, age, email } = this.state;
        this.props.createFriend({ name, age, email });
        this.setState({ name: '', age: '', email: '' });
    };

    render() {
        return <Form className="friendForm" inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" className="mr-sm-2">Name:</Label>
                <Input 
                    type="text"
                    id="name" 
                    placeholder="Name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInputChange} 
                    required
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="age" className="mr-sm-2">Age:</Label>
                <Input 
                    type="number"
                    id="age" 
                    placeholder="Age" 
                    name="age" 
                    value={this.state.age} 
                    onChange={this.handleInputChange} 
                    required
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="email" className="mr-sm-2">Email:</Label>
                <Input 
                    type="email" 
                    id="email"
                    placeholder="Email" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleInputChange} 
                    required
                />
            </FormGroup>
            <Button onClick={() => this.handleCreateFriend()}>Add Friend</Button>
          </Form>;
    }
}

// const mapStateToProps = state => {
//     return {

//     }
// }

export default connect(null, { createFriend })(FriendForm);