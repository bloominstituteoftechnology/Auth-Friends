import React from "react";
import { connect } from "react-redux";

import  FriendList  from "../components/FriendList";

import { fetchFriends } from '../store/actions';

class FriendListView extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.fetchFriends();
    console.log(this.props.fetchFriends())
  }

  render(){
    return(
      <div>
        <FriendList friends={this.props.friends} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.friends)
  return{
    friends: state.friends
  }
}

export default connect(
  mapStateToProps, { fetchFriends }
)(FriendListView);
