import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriends } from "../actions/actions";
import { Form, Label, FormGroup, Input, Button } from "reactstrap";

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      newFriend: { name: "", email: "", age: "" }
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnSubmit(event) {
    let id = this.props.id || 0;
    this.props.submit(this.state.newFriend, id);
    this.setState({ newFriend: { name: "", age: "", email: "" } });
  }
  handleOnChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let newF = this.state.newFriend;
    newF[name] = value;
    this.setState({
      newFriend: newF
    });
  }
  componentDidMount() {
    let existingFriend = this.props.friend || { name: "", email: "", age: "" };
    console.log("Friend", existingFriend);
    this.setState({ newFriend: existingFriend });
  }

  render() {
    return (
      <Form
        className="text-left mt-5"
        onSubmit={this.handleOnSubmit}
        onChange={this.handleOnChange}
      >
        <FormGroup>
          <Label for="friendName">Name</Label>
          <Input
            type="text"
            name="name"
            id="friendName"
            value={this.state.newFriend.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="friendAge">Age</Label>
          <Input
            type="text"
            name="age"
            id="friendAge"
            value={this.state.newFriend.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="friendEmail">E-mail</Label>
          <Input
            type="email"
            name="email"
            id="friendEmail"
            value={this.state.newFriend.email}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { addFriends })(FormComponent);
