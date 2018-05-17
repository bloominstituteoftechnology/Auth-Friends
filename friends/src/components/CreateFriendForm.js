import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { newFriend } from '../actions/index';


class CreateFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      name: "",
      age: "",
      email: "",
    }
  } 

  handleFriendInput = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const newFriend = Object.assign({}, this.state)
    if(newFriend.name !== ""){
      this.props.newFriend(newFriend)
    }  
    
    this.setState({ 
      name: "",
      age: "",
      email: "",
    })

    console.log(newFriend)
  }

  render() { 
    return (
      <div className="row justify-content-center mt-4">
        <Form onSubmit={this.handleSubmit} className="col-4">
            <FormGroup>
              <Label for="friendName">Name</Label>
              <Input type="text" name="name" id="friendName" placeholder="New Name" value={this.state.name} onChange={this.handleFriendInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="friendAge">Age</Label>
              <Input type="text" name="age" id="friendAge" placeholder="New Age" value={this.state.age} onChange={this.handleFriendInput}/>
            </FormGroup>
            <FormGroup>
              <Label for="friendEmail">Email</Label>
              <Input type="email" name="email" id="friendEmail" placeholder="New email" value={this.state.email} onChange={this.handleFriendInput}/>
            </FormGroup>          
            <Button type="submit">Submit</Button>
          </Form>
      </div>
    )
  }
}
 
export default connect(null, { newFriend })(CreateFriendForm);