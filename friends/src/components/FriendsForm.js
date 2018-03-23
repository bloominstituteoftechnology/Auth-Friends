import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class FriendsForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addFriend(this.state)
    this.setState({
      name: '',
      age: '',
      email: ''
    })
  }

  handleInput = event => {
    this.setState({
      [ event.target.name ]: event.target.value })
  }

  render() {
    return (
      <Form className="form" onSubmit={ this.addFriend }>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input 
            type="text" 
            id="name" 
            value={ this.state.name } 
            onChange={ this.handleInput } 
            placeholder="Enter your name"/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input 
            type="number" 
            id="age" 
            value={ this.state.age } 
            onChange={ this.handleInput } 
            placeholder="Enter your age"/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            value={ this.state.email } 
            onChange={ this.handleInput } 
            placeholder="Enter your email"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    addFriend: state.addFriend,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, { addFriend })(FriendsForm);