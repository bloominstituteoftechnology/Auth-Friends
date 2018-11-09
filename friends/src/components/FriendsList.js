import React, { Component } from "react";
import {fetchFriends} from '../actions/FriendsActions'
import {connect} from  'react-redux'

class FriendsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends()
  }

  render() {
      return (
        <div>No Friends</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.freinds,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchFriends}) (FriendsList);