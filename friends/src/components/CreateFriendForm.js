import React from "react";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import {
  createFriend,
  changeUpdateStatus,
  updateFriend
} from "../action/action";

class CreateFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    if (this.props.updating) {
      this.setState({
        name: this.props.friend.name,
        age: this.props.friend.age,
        email: this.props.friend.email
      });
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (
      this.state.name &&
      this.state.age &&
      this.state.email &&
      !this.props.updating
    ) {
      this.props.createFriend(this.state);
      this.setState({
        name: "",
        age: "",
        email: ""
      });
    } else {
      this.props.updateFriend(this.props.friend.id, this.state);
      this.setState({
        name: "",
        age: "",
        email: ""
      });
      this.props.changeUpdateStatus();
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

const mapStateToProps = state => {
  return { updating: state.updatingFriend };
};

export default connect(
  mapStateToProps,
  { createFriend, changeUpdateStatus, updateFriend }
)(CreateFriendForm);
