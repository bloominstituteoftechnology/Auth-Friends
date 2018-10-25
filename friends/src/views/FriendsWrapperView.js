import React, { Component } from "react";
import { connect } from 'react-redux';

import { getFriends } from '../actions'

import { Friends } from '../components'


class FriendsWrapperView extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    this.props.getFriends()
  }
  render() { 
    return (
      <div className="Friends-Wrapper-view">
        <Friends friends={this.props.friends}/>      
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friendsReducer.friends
  }
}
 
export default connect(
  mapStateToProps,
  {
    getFriends
  }
)(FriendsWrapperView);