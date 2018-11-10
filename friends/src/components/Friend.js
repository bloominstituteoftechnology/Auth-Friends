import React from "react";
import { connect } from "react-redux";
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  Badge
} from "reactstrap";

import { deleteFriend, changeUpdateStatus } from '../action/action'
import CreateFriendForm from "./CreateFriendForm";

class Friend extends React.Component {
  constructor(props) {
    super();
    this.state = {updateStatus: false};
  }

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
              <Button onClick={this.props.changeUpdateStatus} color="success">
                Update
              </Button>
            </CardBody>
            {this.props.updating ? <CreateFriendForm friend={this.props.friend} /> : null}
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {updating: state.updatingFriend}
}

export default connect(
  mapStateToProps,
  { deleteFriend, changeUpdateStatus }
)(Friend);
