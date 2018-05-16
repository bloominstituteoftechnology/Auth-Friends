import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


export default class SaveFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                email: '',
                age: ''
        }
    }
    handleInput = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value });
        
    };

    submit() {
        axios.post('http://localhost:5000/api/friends', this.state)
          .then( (response) => {
            window.history.back();
          })
          .catch( (error) => {
            console.log(error);
          });
    }

    render() {
        return (
            <Form className="Friend-form">
                <FormGroup className="Friend-form-group">
                    <Label for="exampleText">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="New friend's name" onChange={this.handleInput}/>
                </FormGroup>

                <FormGroup className="Friend-form-group">
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="friend@email.com" onChange={this.handleInput}/>
                </FormGroup>

                <FormGroup className="Friend-form-group">
                    <Label for="exampleAge">Age</Label>
                    <Input type="number" name="age" id="age" placeholder="Your friend's age" onChange={this.handleInput}/>
                </FormGroup>

                <Button onClick={this.submit.bind(this)}>Submit</Button>
            </Form>
    );
  }
}

