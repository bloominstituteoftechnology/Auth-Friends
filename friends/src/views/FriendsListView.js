import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../action";
import Friend from "../components/Friend";

class FriendsListView extends React.Component {
  componentDidMount() {
    console.log("cdm call");
    this.props.fetchData();
  }
  render() {
    console.log("rendering", this.props);
    return (
      <>
        {this.props.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </>
    );
  }
}
const mapStateToProps = state => (
  console.log("STP", state),
  {
    friends: state.friends
  }
);

export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(FriendsListView);
