import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class UpdateForm extends React.Component {
    constructor(){
        super();
        this.state = {
            id: '',
            name: '',
            age: '',
            email: '',
        };
    }

    handleTaskChange = event => {
      event.preventDefault();
      this.setState({[event.target.name] : event.target.value});
  } 

    handleRequest = () =>{ 
        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.email);
      axios
      .put(`http://localhost:5000/api/friends/${this.state.id}`,{
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
    })
      .then(response => {
        this.setState(() => ({
          id: '',  
          name: '',
          age: '',
          email: '',
      }));
      })
      .catch(error => {
        console.error(error);
      });

    }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleRequest}>
          <FormGroup>
            <Input name="id" id="uidID" placeholder="id" onChange={this.handleTaskChange} value= {this.state.id} />
            <Input name="name" id="nameID" placeholder="name" onChange={this.handleTaskChange} value= {this.state.name} />
            <Input name="age" placeholder="age" onChange={this.handleTaskChange} value= {this.state.age} />
            <Input type="email" name="email" id="exampleEmail"  onChange={this.handleTaskChange} placeholder="email" value= {this.state.email} />
          </FormGroup>
          <Button type="submit" >Submit</Button>
          <Button onClick= {this.handleRequest} >Submit</Button>
        </Form>
      </div>
    );
  }
}