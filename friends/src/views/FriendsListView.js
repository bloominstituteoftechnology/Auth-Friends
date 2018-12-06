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
const mapStateToProps = state => ({
  friends: "none"
});

export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(FriendsListView);
