import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../action";
import FriendList from "../components/FriendList";

class FriendsListView extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return <FriendList />;
  }
}
const mapStateToProps = state => (
  console.log("mts", state),
  {
    friends1: "fasfnone"
  }
);

export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(FriendsListView);
