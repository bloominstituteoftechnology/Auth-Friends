import React from "react";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { createFriend } from "../action/action";

class CreateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          name: "",
        age: "",
        email: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
      this.props.createFriend(this.state);
      this.setState({
          name: "",
          age: "",
          email: ""
        
      });
    }
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <FormGroup row>
          <Label for="friendName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="friendName"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="friendAge" sm={2}>
            Age
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="age"
              id="friendAge"
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="friendEmail">
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="email"
              id="friendEmail"
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default connect(
  () => ({}),
  { createFriend }
)(CreateFriendForm);
