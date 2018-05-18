import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import { connect } from 'react-redux';
import { saveFriend } from '../../actions';

class SaveFriend extends React.Component {
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
        const friend = this.state;
        console.log("here " , friend);
        this.props.saveFriend(friend);
        window.history.back();
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

const mapDispatchToProps = state => {
    const  friendReducer = state.friendReducer;
    return friendReducer;
  };
  
export default connect(mapDispatchToProps, { saveFriend })(SaveFriend);