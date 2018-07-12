import React from "react";
import { getFriends } from "../actions/action";
import { connect } from "react-redux";

class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: ""
    };
  }
  componentDidMount() {
    this.props.getFriends("http://localhost:5000/api/friends/");
  }
  render() {
    return (
      <div>
        {this.props.friends.map(friend => {
          return <div>{friend.name}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
