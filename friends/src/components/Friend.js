import React from "react";
import { connect } from "react-redux";
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  Badge
} from "reactstrap";

import { deleteFriend } from '../action/action'

class Friend extends React.Component {
  render() {
    return (
      <div>
        <Button
          color="primary"
          id={`toggle${this.props.friend.id}`}
          style={{ marginBottom: "1rem" }}
        >
          {this.props.friend.name}
        </Button>
        <UncontrolledCollapse toggler={`toggle${this.props.friend.id}`}>
          <Card>
            <CardBody>
              {this.props.friend.name} is {this.props.friend.age} years old
            </CardBody>
            <CardBody>
              Use <Badge>{this.props.friend.email}</Badge> as thier main contact
            </CardBody>
            <CardBody>
              <Button
                onClick={() => this.props.deleteFriend(this.props.friend.id)}
                color="danger"
              >
                Delete
              </Button>
              <Button onClick={this.deleteFriend} color="success">
                Update
              </Button>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { deleteFriend }
)(Friend);
