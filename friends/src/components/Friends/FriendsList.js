import React from "react";
import Friend from "./Friend";
import { fetchFriends } from '../../actions';
import { connect } from 'react-redux';
class FriendsList extends React.Component {
  componentDidMount() {
    const URL = 'http://localhost:5000/api/friends';
    this.props.fetchFriends(URL);
  }
  render() {
    return <ul>a</ul>;
  }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
    }
}
export default connect(mapStateToProps, { fetchFriends })(FriendsList);
