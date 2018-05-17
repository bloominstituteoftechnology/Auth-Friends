import React, { Component } from 'react';
import './addfriend.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';



class AddFriend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    }
  }

  handleFormType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <div>
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
          <Button color="danger" onClick={this.props.cancelButton} >Cancel</Button><Button color="success" onClick={this.props.submitButton}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddFriend;
