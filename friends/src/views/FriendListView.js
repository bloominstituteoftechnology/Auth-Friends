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
        {this.props.isFetching ? <h2> Loading Friends ... </h2> : <h1> Friends List </h1>}
        <FriendList friends={this.props.friends} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.friends)
  return{
    friends: state.friends,
    isFetching: state.fetching
  }
}

export default connect(
  mapStateToProps, { fetchFriends }
)(FriendListView);
