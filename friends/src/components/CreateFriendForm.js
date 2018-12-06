import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addFriend} from '../actions'

import {
    FormWrapper,
    FormHeader,
    FormGroup,
    FormLabel,
    FormInput,
    FormButton
} from '../styles/Content';

class CreateFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    addFriend = e => {
        e.preventDefault();
        const {name, age, email} = this.state;
        this.props.addFriend({name, age, email});
        this.setState({name: '', age: '', email: ''})
    }

    render() {
        const {name, age, email} = this.state;
        return (
            <FormWrapper>
                <FormHeader>Add New Friend</FormHeader>

                <FormGroup onSubmit={this.addFriend}>
                    <FormLabel>NAME </FormLabel>
                    <FormInput
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={name}
                        onChange={this.handleInput}
                    />
                    <br/>

                    <FormLabel>AGE </FormLabel>
                    <FormInput
                        type="text"
                        placeholder="Enter Age"
                        name="age"
                        value={age}
                        onChange={this.handleInput}
                    />
                    <br/>

                    <FormLabel>EMAIL </FormLabel>
                    <FormInput
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={this.handleInput}
                    />
                    <br/>

                    <FormButton type="submit">Add New Friend</FormButton>
                </FormGroup>
            </FormWrapper>
        );
    }
}

// exported to FriendsListContainer
export default connect(null, {addFriend})(CreateFriendForm);