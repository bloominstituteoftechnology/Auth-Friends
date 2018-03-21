import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { connect } from "react-redux";
import { updateFriend, deleteFriend } from "../actions/actions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

class FriendComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Card className="my-3">
        <CardBody>
          <CardTitle>{this.props.friend.name}</CardTitle>
          <CardText>Age: {this.props.friend.age}</CardText>
          <CardText>E-mail: {this.props.friend.email}</CardText>
        </CardBody>
        <CardBody>
          <Button color="success" onClick={this.toggle}>
            Edit Friend
          </Button>
          <Button
            color="danger"
            onClick={() => this.props.deleteFriend(this.props.friend.id)}
          >
            Remove Friend
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit Friend</ModalHeader>
            <ModalBody>
              <FormComponent
                submit={this.props.updateFriend}
                id={this.props.friend.id}
                friend={this.props.friend}
              />
            </ModalBody>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}

export default connect(null, { updateFriend, deleteFriend })(FriendComponent);
