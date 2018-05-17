import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import {savingFriends} from '../Actions'
import DisplayList from './DisplayList'

class FormIn extends React.Component {
    constructor(){
        super();
        this.state = {
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
        let pl = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
        };
        this.props.savingFriends(pl);

        this.setState(() => ({
                name: '',
                age: '',
                email: ''
        }))
    }

  render() {
    return (
      <div>
        <Form >
          <FormGroup>
            <Input name="name" id="nameID" placeholder="name" onChange={this.handleTaskChange} value= {this.state.name} />
            <Input name="age" placeholder="age" onChange={this.handleTaskChange} value= {this.state.age} />
            <Input type="email" name="email" id="exampleEmail"  onChange={this.handleTaskChange} placeholder="email" value= {this.state.email} />
          </FormGroup>
          <Button onClick= {this.handleRequest} >Submit</Button>
        </Form>
      </div>
    );
  }
}



  
export default connect(null, { savingFriends })(FormIn);