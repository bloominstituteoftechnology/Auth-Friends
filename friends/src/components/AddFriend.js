import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add_new_friend } from '../actions';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './AddFriend.css';

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    };


  render() {
    return (
        <Form inline type='submit' className='Form'>
            <FormGroup className='mt-2 mb-2 mr-sm-2'>
              <Label className='mr-sm-2'>name:</Label>
                <Input
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleNewInput}
                />
              </FormGroup>
              <FormGroup className='mt-2 mb-2 mr-sm-2'>
                <Label className='mr-sm-2'>age:</Label>
                <Input
                  type='number'
                  name='age'
                  value={this.state.age}
                  onChange={this.handleNewInput}
                />
              </FormGroup>
              <FormGroup className='mt-2 mb-2 mr-sm-2'>
                <Label className='mr-sm-2'>email:</Label>
                <Input
                  type='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleNewInput}
                />
              </FormGroup>
              <Button type='submit' style={{backgroundColor: 'darkred'}} onClick={this.submitFriend}>Submit New Friend</Button>
        </Form>
    );
  }

  handleNewInput = event => {
      event.preventDefault();
      this.setState({ [event.target.name]: event.target.value });
  }

  // submitFriend() resets form so a new friend can be added and
  // sends formData to application state
  submitFriend = event => {
      const { name, age, email } = this.state;
      const newFriend = { name, age, email };
      this.props.add_new_friend(newFriend);
      this.setState({
        name: '',
        age: '',
        email: ''
      });
  };

} // end AddFriend class
  
  export default connect(null, { add_new_friend })(AddFriend);