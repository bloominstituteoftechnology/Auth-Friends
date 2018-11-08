import React, { Component } from "react";
// import Friend from "./Friend"
import {fetchFriends} from '../actions/friendsActions'
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
        <div>No Friends
        
        {/* <ul>{this.props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />})}</ul>
         */}
        </div>

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
