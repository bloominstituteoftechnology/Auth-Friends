import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import getFriends from "../actions/getFriendsAction";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <Fragment>
        {this.props.friends.map(friend => (
          <Card className="d-flex" key={friend.id}>
            <CardTitle>
              1{friend.name}
              {console.log(friend.name, "name")}
            </CardTitle>
            <CardText>2{friend.age}</CardText>
            <CardText>3{friend.email}</CardText>
            {/* <Button>Remove Friend</Button> */}
          </Card>
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

export default connect(mapStateToProps, { getFriends })(FriendsList);
