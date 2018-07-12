import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import styled from 'styled-components';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const StyledForm = styled(Form)`
  width: 300px;
  margin-left: 40%;
`;

class AddFriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let newFriend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email,
    };
    this.setState({ name: '', age: '', email: '' });
    const URL = 'http://localhost:5000/api/friends';
    this.props.addFriend(URL, newFriend);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledForm>
        <FormGroup row>
          <Label for="Name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="enter name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Age" sm={2}>
            Age
          </Label>
          <Col sm={10}>
            <Input
              name="age"
              type="number"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="enter age"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="enter email"
            />
          </Col>
        </FormGroup>
        <Button color="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </StyledForm>
    );
  }
}

export default connect(
  null,
  { addFriend },
)(AddFriendForm);
