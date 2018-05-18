import React, { Component } from 'react';
import './addfriend.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';



class AddFriend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.nameText,
      age: props.ageText,
      email: props.emailText
    }
  }

  handleFormType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <div>
        <h1>{this.props.headerText}</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input name="name" id="name" placeholder="Enter Name" onChange={this.handleFormType} value={this.state.name} />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input name="age" id="age" placeholder="Enter Age"  onChange={this.handleFormType} value={this.state.age} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input name="email" id="email" placeholder="Enter Email" onChange={this.handleFormType} value={this.state.email} />
          </FormGroup>
          <Button color="danger" onClick={this.props.cancelButton} >Cancel</Button>
          <Button color="success" onClick={() => this.props.submitButton('http://localhost:5000/api/friends/', {name: this.state.name, age: this.state.age, email: this.state.email}, this.props.friendID )}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddFriend;
