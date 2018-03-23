import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import getFriends from "../actions/getFriendsAction";
import removeFriend from "../actions/removeFriendAction";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <Fragment>
        {this.props.friends.map(friend => (
          <Fragment>
            <Card className="d-flex" key={friend.id}>
              <CardTitle>
                {friend.name}
                {console.log(friend.name, "name")}
              </CardTitle>
              <CardText>{friend.age}</CardText>
              <CardText>{friend.email}</CardText>
            </Card>
            <Button onClick={() => this.props.removeFriend(friend.id)}>
              Remove Friend
            </Button>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends, removeFriend })(
  FriendsList
);
